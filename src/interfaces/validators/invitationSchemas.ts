import { z } from 'zod';

export const createInvitationSchema = z.object({
  body: z.object({
    email: z.string().email(),
    phoneNumber: z.string().min(1),
    status: z.string().min(1),
  }),
});

export const updateInvitationSchema = z.object({
  body: z.object({
    email: z.string().email(),
    phoneNumber: z.string().min(1),
    status: z.string().min(1),
  }),
});

export const getInvitationByIdSchema = z.object({
  params: z.object({
    id: z.string().uuid(),
  }),
});

export const deleteInvitationSchema = z.object({
  params: z.object({
    id: z.string().uuid(),
  }),
});

export const getInvitationsByStatusSchema = z.object({
  params: z.object({
    status: z.string().min(1),
  }),
});

export const getInvitationsByEmailSchema = z.object({
  params: z.object({
    email: z.string().email(),
  }),
});

export const getInvitationsByPhoneNumberSchema = z.object({
  params: z.object({
    phoneNumber: z.string().min(1),
  }),
});
