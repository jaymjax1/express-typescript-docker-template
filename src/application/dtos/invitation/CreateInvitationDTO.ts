import { InvitationStatus } from '@/domain/models/Invitation';
import { CreateInvitationInputDTO } from './CreateInvitationInputDTO';

export interface CreateInvitationDTO extends CreateInvitationInputDTO {
  id: string;
  status: InvitationStatus;
  inviteToken: string;
  createdAt: Date;
  updatedAt: Date;
}
