import { Request, Response, NextFunction } from 'express';
import { AuthService } from '@/application/services';

export class AuthController {
  constructor(private readonly authService: AuthService) {}

  sendOtp = async (req: Request, res: Response, _next: NextFunction) => {
    const { phoneNumber } = req.body;
    const otp = await this.authService.sendOtp(phoneNumber);
    res.status(200).json({ otp });
  };

  verifyOtp = async (req: Request, res: Response, _next: NextFunction) => {
    const { phoneNumber, otp } = req.body;
    const isValid = await this.authService.verifyOtp(phoneNumber, otp);
    res.status(200).json({ isValid });
  };
}
