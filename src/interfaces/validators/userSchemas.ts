import { z } from 'zod';

export const createUserSchema = z.object({
  body: z.object({
    firstName: z.string().min(1),
    lastName: z.string().min(1),
    phoneNumber: z.string().min(1),
    email: z.string().email(),
    password: z.string().min(6),
  }),
});

export const getUserSchema = z.object({
  params: z.object({
    id: z.string().uuid(),
  }),
});

export const updateUserSchema = z.object({
  params: z.object({
    id: z.string().uuid(),
  }),
});

export const deleteUserSchema = z.object({
  params: z.object({
    id: z.string().uuid(),
  }),
});

export const assignRoleSchema = z.object({
  params: z.object({
    id: z.string().uuid(),
  }),
  body: z.object({
    roleId: z.string().uuid(),
  }),
});

export const revokeRoleSchema = z.object({
  params: z.object({
    id: z.string().uuid(),
    roleId: z.string().uuid(),
  }),
});

export const getUserRolesSchema = z.object({
  params: z.object({
    id: z.string().uuid(),
  }),
});
