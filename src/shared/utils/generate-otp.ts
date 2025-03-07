/**
 * Generates a random 6-digit OTP (One Time Password)
 * @returns A string containing a 6-digit OTP
 */
export const generateOTP = (): string => {
  // Generate a random number between 100000 and 999999 (6 digits)
  const otp = Math.floor(100000 + Math.random() * 900000);
  return otp.toString();
};
