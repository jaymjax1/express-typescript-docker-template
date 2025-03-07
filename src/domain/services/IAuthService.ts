export interface IAuthService {
  sendOtp(email: string): Promise<string>;
  verifyOtp(email: string, otp: string): Promise<boolean>;
}
