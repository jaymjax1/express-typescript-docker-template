import dotenv from 'dotenv';

dotenv.config({ path: '.env.test' });
// Set test environment
process.env.NODE_ENV = 'test';
process.env.OPENAI_API_KEY = 'test-key';
process.env.ANTHROPIC_API_KEY = 'test-key';
process.env.FIREBASE_API_KEY = 'test-key';
process.env.FIREBASE_AUTH_DOMAIN = 'test-key';
process.env.FIREBASE_PROJECT_ID = 'test-key';
process.env.FIREBASE_STORAGE_BUCKET = 'test-key';
process.env.FIREBASE_MESSAGING_SENDER_ID = 'test-key';
process.env.FIREBASE_APP_ID = 'test-key';
