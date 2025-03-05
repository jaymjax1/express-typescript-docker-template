export enum DatabaseType {
  POSTGRES = 'postgres',
  MONGODB = 'mongodb',
  FIREBASE = 'firebase',
  SQLITE = 'sqlite',
}

export interface DatabaseConfig {
  type: DatabaseType;
  host: string;
  port: number;
  username?: string;
  password?: string;
  database: string;
  // Add other common config options
}
