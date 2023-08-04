import type { IExample } from '@/DTO/models/IExample';
import type { ID } from '@/DTO/ID';
import type { ICreateExample } from '@/DTO/forms/ICreateExample';

interface IUpdateParams extends ICreateExample {
  id: ID;
}

interface IExampleService {
  index(data: any): Promise<any>;

  show(id: ID): Promise<IExample>;

  create(data: ICreateExample): Promise<IExample>;

  update(data: IUpdateParams): Promise<void>;
}

export type { IExampleService, IExample, ICreateExample, IUpdateParams, ID };
