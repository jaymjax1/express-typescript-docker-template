export interface RoleDTO {
  id: string;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

export const toRoleDTO = (role: Role): RoleDTO => ({
  id: role.getId(),
  name: role.getName(),
  description: role.getDescription(),
  createdAt: role.getCreatedAt(),
  updatedAt: role.getUpdatedAt(),
});
