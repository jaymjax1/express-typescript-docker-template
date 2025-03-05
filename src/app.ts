import dotenv from 'dotenv';
import express, { Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import logger from './utils/logger';
import { DatabaseFactory } from './infrastructure/database/DatabaseFactory';
import { DatabaseType, DatabaseConfig } from './core/types/DatabaseTypes';
import { UserService } from './services/UserService';
import { User } from './core/entities/User';
import { LanguageModelFactory } from './infrastructure/ai/LanguageModelFactory';
import { ModelType } from './core/types/LanguageModelTypes';
import { AIService } from './services/AIService';
import { MockLanguageModelFactory } from './infrastructure/ai/MockLanguageModelFactory';

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// HTTP request logging
app.use(
  morgan('combined', {
    stream: {
      write: (message: string) => logger.info(message.trim()),
    },
  })
);

const dbConfig: DatabaseConfig = {
  type: DatabaseType.POSTGRES,
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME || 'myapp',
};

// Create database instance
const db = DatabaseFactory.createDatabase<User>(dbConfig);

// Create service
const userService = new UserService(db);

// Create AI model instance
const factory = process.env.NODE_ENV === 'test' ? MockLanguageModelFactory : LanguageModelFactory;

const aiModel = factory.createModel({
  type: ModelType.OPENAI,
  apiKey: process.env.OPENAI_API_KEY,
  model: 'gpt-3.5-turbo',
  defaultOptions: {
    temperature: 0.7,
    maxTokens: 500,
  },
});

// Create AI service
const aiService = new AIService(aiModel);

// Routes
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.get('/health', (req: Request, res: Response) => {
  res.send('OK');
});

// Use in routes
app.post('/users', async (req: Request, res: Response) => {
  try {
    const user = await userService.createUser(req.body);
    res.json(user);
  } catch (error) {
    logger.error('Error creating user:', error);
    res.status(500).json({ error: 'Failed to create user' });
  }
});

app.post('/ai/generate', async (req: Request, res: Response) => {
  try {
    const response = await aiService.generateResponse(req.body.prompt, req.body.options);
    res.json(response);
  } catch (error) {
    logger.error('Error generating AI response:', error);
    res.status(500).json({ error: 'Failed to generate response' });
  }
});

// Error handling middleware
app.use((err: Error, req: Request, res: Response, _next: NextFunction) => {
  logger.error('Unhandled error:', {
    error: err.message,
    stack: err.stack,
    path: req.path,
    method: req.method,
  });
  res.status(500).send('Something broke!');
});

// Only start the server if this file is run directly
if (require.main === module) {
  app.listen(port, () => {
    logger.info(`Server running on port ${port}`);
  });
}

export default app;
