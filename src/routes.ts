import { Router } from 'express';
import { createUserRouter } from '@/interfaces/routes/userRoutes';
import { createHealthRouter } from '@/interfaces/routes/healthRoutes';
import { createInvitationRouter } from '@/interfaces/routes/invitationRoutes';
import { createAuthRouter } from '@/interfaces/routes/authRoutes';

export const allRoutes = () => {
  const router = Router();

  router.use('/auth', createAuthRouter());
  router.use('/health', createHealthRouter());
  router.use('/invitations', createInvitationRouter());
  router.use('/users', createUserRouter());

  return router;
};
