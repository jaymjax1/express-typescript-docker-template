/**
 * BUSINESS LOGIC LAYER - Handles business logic
 */

import { User } from '@/domain/models/User';
import { IUserRepository } from '@/domain/repositories/IUserRepository';
import { IUserService } from '@/domain/services/';
import { CreateUserInputDTO } from '@/application/dtos/user/CreateUserInputDTO';
import { v4 as uuidv4 } from 'uuid';
import { EmailAddress } from '@/domain/value-objects/EmailAddress';
// import { RoleNames } from '@/domain/value-objects/RoleNames';
// import { RoleDTO, toRoleDTO } from '@/application/dtos/role/RoleDTO';
// import { Role } from '@/domain/models/Role';

export class UserService implements IUserService {
  constructor(private readonly userRepository: IUserRepository) {}

  async createUser(data: CreateUserInputDTO): Promise<User> {
    const existingUser = await this.userRepository.findByEmail(data.email);
    if (existingUser) {
      throw new Error('User with this email already exists');
    }

    const now = new Date();
    const user = new User(
      uuidv4(),
      data.firstName,
      data.lastName,
      new EmailAddress(data.email),
      data.phoneNumber,
      now,
      now,
      []
    );
    await this.userRepository.save(user);
    return user;
  }

  async getUserById(id: string): Promise<User> {
    const user = await this.userRepository.findById(id);
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }

  async updateUser(_id: string, _data: Partial<User>): Promise<User> {
    throw new Error('Not implemented');
  }

  async deleteUser(_id: string): Promise<void> {
    throw new Error('Not implemented');
  }

  // async assignRole(_userId: string, _roleId: string): Promise<void> {
  //   throw new Error('Not implemented');
  // }

  // async revokeRole(_userId: string, _roleId: string): Promise<void> {
  //   throw new Error('Not implemented');
  // }
}
