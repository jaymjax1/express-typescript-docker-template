import { RoleName } from '../value-objects/RoleNames';

export class Role {
  constructor(
    private readonly id: string,
    private readonly name: RoleName,
    private readonly description: string,
    private readonly createdAt: Date,
    private readonly updatedAt: Date
  ) {}

  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getDescription(): string {
    return this.description;
  }

  getCreatedAt(): Date {
    return this.createdAt;
  }

  getUpdatedAt(): Date {
    return this.updatedAt;
  }
}
