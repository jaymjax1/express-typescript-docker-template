import { Request, Response, NextFunction } from 'express';
import logger from '@/shared/utils/logger';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  _next: NextFunction
): void => {
  logger.error('Unhandled error:', {
    error: err.message,
    stack: err.stack,
    path: req.path,
    method: req.method,
  });

  res.status(500).json({ error: 'Internal Server Error' });
};
