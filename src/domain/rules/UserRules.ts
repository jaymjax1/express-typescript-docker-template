export class UserRules {
  static isFirstNameValid(firstName: string): boolean {
    const firstNameRegex = /^[a-zA-Z]+$/;
    return firstNameRegex.test(firstName);
  }

  static isLastNameValid(lastName: string): boolean {
    const lastNameRegex = /^[a-zA-Z]+$/;
    return lastNameRegex.test(lastName);
  }

  static isEmailValid(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}
