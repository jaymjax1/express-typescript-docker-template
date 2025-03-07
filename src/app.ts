import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import morgan from 'morgan';
import logger from '@/shared/utils/logger';
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import hpp from 'hpp';
import { allRoutes } from '@/routes';
import { errorHandler } from '@/interfaces/middlewares/errorHandler';

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Basic middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// HTTP request logging
app.use(
  morgan('combined', {
    stream: {
      write: (message: string) => logger.info(message.trim()),
    },
  })
);

// Security middleware
app.use(helmet()); // Adds various HTTP headers for security
app.use(
  cors({
    // Cross-Origin Resource Sharing
    origin: process.env.CORS_ORIGIN || '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    credentials: true,
  })
);

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Prevent HTTP Parameter Pollution
app.use(hpp());

// Additional recommended security settings
app.disable('x-powered-by');

// Routes
app.use('/api', allRoutes()); // Mount all routes under /api

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({ error: 'Not Found' });
});

// Error handling middleware
app.use(errorHandler);

// Only start the server if this file is run directly
if (require.main === module) {
  app.listen(port, () => {
    logger.info(`Server running on port ${port}`);
  });
}

export default app;
