import { PermissionNames } from '../value-objects/PermissionNames';

export class Permission {
  constructor(
    private readonly id: string,
    private readonly name: PermissionNames,
    private readonly description: string,
    private readonly createdAt: Date,
    private readonly updatedAt: Date
  ) {}

  getId(): string {
    return this.id;
  }

  getName(): PermissionNames {
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
