import { IInvitationService } from '@/domain/services/IInvitationService';
import { Invitation } from '@/domain/models/Invitation';
import { IInvitationRepository } from '@/domain/repositories/IInvitationRepository';
import { v4 as uuidv4 } from 'uuid';
import { CreateInvitationInputDTO } from '../dtos/invitation/CreateInvitationInputDTO';
import crypto from 'crypto';
import { InvitationStatus } from '@/domain/value-objects/InvitationStatus';

export class InvitationService implements IInvitationService {
  constructor(private readonly invitationRepository: IInvitationRepository) {}

  async createInvitation(data: CreateInvitationInputDTO): Promise<Invitation> {
    const existingInvitations = await this.invitationRepository.findByEmail(data.inviteeEmail);
    if (existingInvitations.length > 0) {
      throw new Error('Invitation with this email already exists');
    }

    const now = new Date();
    const invitation = new Invitation(
      uuidv4(),
      data.inviterId,
      data.inviteeEmail,
      data.inviteePhoneNumber,
      InvitationStatus.PENDING,
      crypto.randomBytes(32).toString('hex'),
      now,
      now,
      data.roleId
    );

    return this.invitationRepository.save(invitation);
  }

  async getInvitationById(id: string): Promise<Invitation | null> {
    return this.invitationRepository.findById(id);
  }

  async updateInvitation(id: string, status: InvitationStatus): Promise<Invitation> {
    const invitation = await this.invitationRepository.findById(id);
    if (!invitation) {
      throw new Error('Invitation not found');
    }

    switch (status) {
      case InvitationStatus.ACCEPTED:
        invitation.accept();
        break;
      case InvitationStatus.REJECTED:
        invitation.reject();
        break;
      case InvitationStatus.EXPIRED:
        invitation.expire();
        break;
      default:
        throw new Error('Invalid invitation status');
    }

    return this.invitationRepository.update(id, invitation);
  }

  async deleteInvitation(id: string): Promise<void> {
    return this.invitationRepository.delete(id);
  }

  async getInvitationsByEmail(email: string): Promise<Invitation[]> {
    return this.invitationRepository.findByEmail(email);
  }

  async getInvitationsByPhoneNumber(phoneNumber: string): Promise<Invitation[]> {
    return this.invitationRepository.findByPhoneNumber(phoneNumber);
  }

  async getInvitationsByStatus(status: InvitationStatus): Promise<Invitation[]> {
    return this.invitationRepository.findByStatus(status);
  }
}
