import { IDatabase } from '../../../core/interfaces/IDatabase';
import { DatabaseConfig } from '../../../core/types/DatabaseTypes';

export class PostgresAdapter<T> implements IDatabase<T> {
  constructor(private config: DatabaseConfig) {}

  async connect(): Promise<void> {
    // Implement postgres connection
  }

  async disconnect(): Promise<void> {
    // Implement disconnect
  }

  async find(_query: object): Promise<T[]> {
    // Implement find
    return [];
  }

  async findOne(_query: object): Promise<T | null> {
    // Implement findOne
    return null;
  }

  async create(_data: Partial<T>): Promise<T> {
    // Implement create
    throw new Error('Not implemented');
  }

  async update(_query: object, _data: Partial<T>): Promise<T | null> {
    // Implement update
    return null;
  }

  async delete(_query: object): Promise<boolean> {
    // Implement delete
    return false;
  }
}
