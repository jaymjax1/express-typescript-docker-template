export class PermissionNames {
  static readonly CREATE_USER = 'create_user';
  static readonly READ_USER = 'read_user';
  static readonly UPDATE_USER = 'update_user';
  static readonly DELETE_USER = 'delete_user';
  static readonly ASSIGN_ROLE = 'assign_role';
  static readonly REVOKE_ROLE = 'revoke_role';

  static readonly ALL = [
    PermissionNames.CREATE_USER,
    PermissionNames.READ_USER,
    PermissionNames.UPDATE_USER,
    PermissionNames.DELETE_USER,
    PermissionNames.ASSIGN_ROLE,
    PermissionNames.REVOKE_ROLE,
  ] as const;

  static isValid(name: string): boolean {
    return PermissionNames.ALL.includes(name as (typeof PermissionNames.ALL)[number]);
  }
}
