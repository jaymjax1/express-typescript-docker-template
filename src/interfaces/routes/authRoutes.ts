import { Router } from 'express';
import { AuthService } from '@/application/services';
import { AuthController } from '@/interfaces/controllers/AuthController';

export const createAuthRouter = () => {
  const router = Router();

  // Initialize dependencies
  const authService = new AuthService();
  const authController = new AuthController(authService);

  router.post('/send-otp', authController.sendOtp);
  router.post('/verify-otp', authController.verifyOtp);

  return router;
};
