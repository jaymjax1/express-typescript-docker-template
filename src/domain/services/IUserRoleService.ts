import { Role } from '../models/Role';

export interface IUserRoleService {
  assignRole(userId: string, roleId: string): Promise<void>;
  revokeRole(userId: string, roleId: string): Promise<void>;
  getUserRoles(userId: string): Promise<Role[]>;
}
