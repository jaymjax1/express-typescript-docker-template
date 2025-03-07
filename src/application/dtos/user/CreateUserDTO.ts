import { CreateUserInputDTO } from './CreateUserInputDTO';

export interface CreateUserDTO extends CreateUserInputDTO {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}
