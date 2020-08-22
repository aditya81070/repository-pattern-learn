export interface IRead<T> {
  find(item: T): Promise<T[]>;
  fineOne(id: string): Promise<T>;
}
