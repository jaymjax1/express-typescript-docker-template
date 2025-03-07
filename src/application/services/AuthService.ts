import { IAuthService } from '@/domain/services/';
import { generateOTP } from '@/shared/utils/generate-otp';

export class AuthService implements IAuthService {
  async sendOtp(_phoneNumber: string): Promise<string> {
    const otp = generateOTP();
    return otp;
  }

  async verifyOtp(_phoneNumber: string, _otp: string): Promise<boolean> {
    return true;
  }
}
