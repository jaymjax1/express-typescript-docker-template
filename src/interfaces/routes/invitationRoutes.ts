import { Router } from 'express';
import { InvitationController } from '@/interfaces/controllers/InvitationController';
import { InvitationService } from '@/application/services/';
import { FirebaseInvitationRepository } from '@/infrastructure/repositories/';
import { firebaseApp } from '@/infrastructure/db/firebaseClient';
import { validateRequest } from '@/interfaces/middlewares/validateRequest';
import {
  createInvitationSchema,
  updateInvitationSchema,
  deleteInvitationSchema,
  getInvitationsByStatusSchema,
  getInvitationByIdSchema,
} from '@/interfaces/validators/invitationSchemas';

export const createInvitationRouter = () => {
  const router = Router();

  const invitationRepository = new FirebaseInvitationRepository(firebaseApp);
  const invitationService = new InvitationService(invitationRepository);
  const invitationController = new InvitationController(invitationService);

  router.post('/', validateRequest(createInvitationSchema), invitationController.createInvitation);
  router.get(
    '/:id',
    validateRequest(getInvitationByIdSchema),
    invitationController.getInvitationById
  );
  router.put(
    '/:id',
    validateRequest(updateInvitationSchema),
    invitationController.updateInvitation
  );
  router.delete(
    '/:id',
    validateRequest(deleteInvitationSchema),
    invitationController.deleteInvitation
  );
  router.get(
    '/status/:status',
    validateRequest(getInvitationsByStatusSchema),
    invitationController.getInvitationsByStatus
  );

  return router;
};
