import { Router } from 'express';
import { createUserRouter } from '@/interfaces/routes/userRoutes';
import { createHealthRouter } from '@/interfaces/routes/healthRoutes';

export const allRoutes = () => {
  const router = Router();

  // Register routes
  router.use('/health', createHealthRouter());
  router.use('/users', createUserRouter());

  return router;
};
