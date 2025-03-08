import { Invitation } from '@/domain/models/Invitation';
import { InvitationStatus } from '@/domain/value-objects/InvitationStatus';

export interface IInvitationRepository {
  save(invitation: Invitation): Promise<Invitation>;
  findById(id: string): Promise<Invitation | null>;
  update(id: string, invitation: Invitation): Promise<Invitation>;
  delete(id: string): Promise<void>;
  findByEmail(email: string): Promise<Invitation[]>;
  findByPhoneNumber(phoneNumber: string): Promise<Invitation[]>;
  findByStatus(status: InvitationStatus): Promise<Invitation[]>;
}
