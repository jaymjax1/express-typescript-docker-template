export const RoleNames = {
  ADMIN: 'admin',
  USER: 'user',
  MODERATOR: 'moderator',
} as const;

export type RoleName = (typeof RoleNames)[keyof typeof RoleNames];
