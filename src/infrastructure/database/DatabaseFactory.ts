import { DatabaseType, DatabaseConfig } from '../../core/types/DatabaseTypes';
import { IDatabase } from '../../core/interfaces/IDatabase';
import { PostgresAdapter } from './adapters';
// Import other adapters

export class DatabaseFactory {
  static createDatabase<T>(config: DatabaseConfig): IDatabase<T> {
    switch (config.type) {
      case DatabaseType.POSTGRES:
        return new PostgresAdapter<T>(config);
      case DatabaseType.MONGODB:
        // return new MongoAdapter<T>(config);
        throw new Error('MongoDB adapter not implemented');
      case DatabaseType.FIREBASE:
        // return new FirebaseAdapter<T>(config);
        throw new Error('Firebase adapter not implemented');
      default:
        throw new Error(`Unsupported database type: ${config.type}`);
    }
  }
}
