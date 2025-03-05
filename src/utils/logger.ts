import winston from 'winston';
import fs from 'fs';
import path from 'path';

// Ensure logs directory exists
const logDir = 'logs';
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

// Define log format
const logFormat = winston.format.combine(winston.format.timestamp(), winston.format.json());

// Create logger instance
const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: logFormat,
  transports: [
    // Write all logs to console
    new winston.transports.Console(),
    // Write all logs with level 'error' and below to 'error.log'
    new winston.transports.File({
      filename: path.join(logDir, 'error.log'),
      level: 'error',
    }),
    // Write all logs to 'combined.log'
    new winston.transports.File({
      filename: path.join(logDir, 'combined.log'),
    }),
  ],
});

// If we're not in production, log to console with simple format
if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new winston.transports.Console({
      format: winston.format.combine(winston.format.colorize(), winston.format.simple()),
    })
  );
}

export default logger;
