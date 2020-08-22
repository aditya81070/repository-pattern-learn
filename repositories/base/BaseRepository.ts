import { IRead } from "../interface/IRead";
import { IWrite } from "../interface/IWrite";
import { Collection, Db, InsertOneWriteOpResult } from "mongodb";
export abstract class BaseRepository<T> implements IWrite<T>, IRead<T> {
  public readonly _collection: Collection;

  constructor(db: Db, collectionName: string) {
    this._collection = db.collection(collectionName);
  }

  async create(item: T): Promise<boolean> {
    const result = await this._collection.insert(item);
    return !!result.result.ok;
  }

  update(id: string, item: T): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

  delete(id: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

  find(item: T): Promise<T[]> {
    throw new Error("Method not implemented.");
  }

  fineOne(id: string): Promise<T> {
    throw new Error("Method not implemented.");
  }
}
