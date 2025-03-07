import { UserRules } from '../rules/UserRules';
import { EmailAddress } from '../value-objects/EmailAddress';
import { Role } from './Role';

export class User {
  constructor(
    private readonly id: string,
    private firstName: string,
    private lastName: string,
    private email: EmailAddress,
    private phoneNumber: string,
    private createdAt: Date,
    private updatedAt: Date,
    private roles: Role[]
  ) {}

  getId(): string {
    return this.id;
  }

  getFirstName(): string {
    return this.firstName;
  }

  getLastName(): string {
    return this.lastName;
  }

  getEmail(): EmailAddress {
    return this.email;
  }

  getCreatedAt(): Date {
    return this.createdAt;
  }

  getUpdatedAt(): Date {
    return this.updatedAt;
  }

  updateFirstName(newFirstName: string): void {
    if (!UserRules.isFirstNameValid(newFirstName)) {
      throw new Error('Invalid first name');
    }
    this.firstName = newFirstName;
    this.updatedAt = new Date();
  }

  updateLastName(newLastName: string): void {
    if (!UserRules.isLastNameValid(newLastName)) {
      throw new Error('Invalid last name');
    }
    this.lastName = newLastName;
    this.updatedAt = new Date();
  }

  updateEmail(newEmail: string): void {
    if (!UserRules.isEmailValid(newEmail)) {
      throw new Error('Invalid email');
    }
    this.email = new EmailAddress(newEmail);
    this.updatedAt = new Date();
  }

  getRoles(): Role[] {
    return this.roles;
  }

  addRole(role: Role): void {
    this.roles.push(role);
  }

  removeRole(role: Role): void {
    this.roles = this.roles.filter((r) => r.getId() !== role.getId());
  }
}
