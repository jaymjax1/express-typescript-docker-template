import { Invitation } from '../models/Invitation';
import { CreateInvitationInputDTO } from '@/application/dtos/invitation/CreateInvitationInputDTO';
import { InvitationStatus } from '@/domain/value-objects/InvitationStatus';

export interface IInvitationService {
  createInvitation(data: CreateInvitationInputDTO): Promise<Invitation>;
  updateInvitation(id: string, status: InvitationStatus): Promise<Invitation>;
  getInvitationById(id: string): Promise<Invitation | null>;
  getInvitationsByEmail(email: string): Promise<Invitation[]>;
  getInvitationsByPhoneNumber(phoneNumber: string): Promise<Invitation[]>;
  getInvitationsByStatus(status: InvitationStatus): Promise<Invitation[]>;
}
