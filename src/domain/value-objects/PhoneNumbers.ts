export class PhoneNumbers {
  private phoneNumber: string;

  constructor(phoneNumber: string) {
    this.phoneNumber = phoneNumber;
  }

  getPhoneNumber(): string {
    return this.phoneNumber;
  }

  setPhoneNumber(phoneNumber: string): void {
    this.phoneNumber = phoneNumber;
  }
}
