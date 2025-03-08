import { Request, Response, NextFunction } from 'express';
import { InvitationService } from '@/application/services/InvitationService';
import { UpdateInvitationDTO } from '@/application/dtos/invitation';

export class InvitationController {
  constructor(private readonly invitationService: InvitationService) {}

  async createInvitation(req: Request, res: Response): Promise<void> {
    try {
      const createdInvitation = await this.invitationService.createInvitation(req.body);
      res.status(201).json(createdInvitation);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create invitation' });
    }
  }

  async getInvitationById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const invitation = await this.invitationService.getInvitationById(id);

      if (!invitation) {
        res.status(404).json({ error: 'Invitation not found' });
        return;
      }

      res.status(200).json(invitation);
    } catch (error) {
      res.status(500).json({ error: 'Failed to get invitation' });
    }
  }

  updateInvitation = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    try {
      const { id } = req.params;
      const updateData: UpdateInvitationDTO = {
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        status: req.body.status,
      };

      const updatedInvitation = await this.invitationService.updateInvitation(id, updateData);
      res.status(200).json(updatedInvitation);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'Failed to update invitation' });
      }
    }
  };

  async deleteInvitation(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      await this.invitationService.deleteInvitation(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete invitation' });
    }
  }

  async getInvitationsByStatus(req: Request, res: Response): Promise<void> {
    try {
      const { status } = req.params;
      const invitations = await this.invitationService.getInvitationsByStatus(status);
      res.status(200).json(invitations);
    } catch (error) {
      res.status(500).json({ error: 'Failed to get invitations' });
    }
  }
}
