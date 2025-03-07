import { User } from '../models/User';
import { CreateUserInputDTO } from '@/application/dtos/user/';
// import { Role } from '../models/Role';

export interface IUserService {
  createUser(data: CreateUserInputDTO): Promise<User>;
  getUserById(id: string): Promise<User>;
  updateUser(id: string, user: User): Promise<User>;
  deleteUser(id: string): Promise<void>;
  // assignRole(userId: string, roleId: string): Promise<void>;
  // revokeRole(userId: string, roleId: string): Promise<void>;
  // getUserRoles(userId: string): Promise<Role[]>;
}
