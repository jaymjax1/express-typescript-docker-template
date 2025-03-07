export class EmailAddress {
  private readonly value: string;

  constructor(email: string) {
    if (!EmailAddress.isValid(email)) {
      throw new Error('Invalid email address');
    }
    this.value = email;
  }

  static isValid(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  getValue(): string {
    return this.value;
  }

  equals(other: EmailAddress): boolean {
    return this.value === other.value;
  }

  toString(): string {
    return this.value;
  }
}
