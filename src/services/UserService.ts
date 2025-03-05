import { IDatabase } from '../core/interfaces/IDatabase';
import { User } from '../core/entities/User';

export class UserService {
  constructor(private db: IDatabase<User>) {}

  async createUser(userData: Partial<User>): Promise<User> {
    return this.db.create(userData);
  }

  async findUserByEmail(email: string): Promise<User | null> {
    return this.db.findOne({ email });
  }

  // Add other user operations
}
