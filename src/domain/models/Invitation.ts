import { InvitationStatus } from '@/domain/value-objects/InvitationStatus';

export class Invitation {
  constructor(
    private readonly id: string,
    private readonly inviterId: string,
    private readonly inviteeEmail: string,
    private readonly inviteePhoneNumber: string,
    private status: InvitationStatus,
    private readonly inviteToken: string,
    private readonly createdAt: Date,
    private updatedAt: Date,
    private readonly roleId: string
  ) {}

  accept() {
    this.status = InvitationStatus.ACCEPTED;
    this.updatedAt = new Date();
  }

  expire() {
    this.status = InvitationStatus.EXPIRED;
    this.updatedAt = new Date();
  }

  reject() {
    this.status = InvitationStatus.REJECTED;
    this.updatedAt = new Date();
  }

  getInviterId(): string {
    return this.inviterId;
  }

  getInviteToken(): string {
    return this.inviteToken;
  }

  getInviteeEmail(): string {
    return this.inviteeEmail;
  }

  getInviteePhoneNumber(): string {
    return this.inviteePhoneNumber;
  }

  getStatus(): InvitationStatus {
    return this.status;
  }

  getCreatedAt(): Date {
    return this.createdAt;
  }

  getUpdatedAt(): Date {
    return this.updatedAt;
  }

  getRoleId(): string {
    return this.roleId;
  }
}
