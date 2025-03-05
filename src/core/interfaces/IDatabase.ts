export interface IDatabase<T> {
  connect(): Promise<void>;
  disconnect(): Promise<void>;
  find(query: object): Promise<T[]>;
  findOne(query: object): Promise<T | null>;
  create(data: Partial<T>): Promise<T>;
  update(query: object, data: Partial<T>): Promise<T | null>;
  delete(query: object): Promise<boolean>;
}
