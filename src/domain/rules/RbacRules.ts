import { Role } from '../models/Role';
import { RoleNames } from '../value-objects/RoleNames';
import { PermissionNames } from '../value-objects/PermissionNames';

export class RbacRules {
  static isRoleNameValid(name: string): boolean {
    return RoleNames.isValid(name);
  }

  static isPermissionNameValid(name: string): boolean {
    return PermissionNames.isValid(name);
  }

  static hasPermission(role: Role, permissionName: PermissionNames): boolean {
    return role.getPermissions().some((permission) => permission.getName() === permissionName);
  }

  static hasRole(roles: Role[], roleName: RoleNames): boolean {
    return roles.some((role) => role.getName() === roleName);
  }

  static isAdminRole(role: Role): boolean {
    return role.getName() === RoleNames.ADMIN;
  }

  // static canAssignRole(assignerRoles: Role[], targetRole: Role): boolean {
  //   // Only admins can assign roles
  //   return assignerRoles.some((role) => this.isAdminRole(role));
  // }

  // static canRevokeRole(revokerRoles: Role[], targetRole: Role): boolean {
  //   // Only admins can revoke roles
  //   return revokerRoles.some((role) => this.isAdminRole(role));
  // }
}
