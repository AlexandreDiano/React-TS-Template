import type {
  ICreateExample,
  ID,
  IExample,
  IExampleService,
  IUpdateParams,
} from '@/DTO/services/IExampleService';

import { InternalServerError } from '@/error/InternalServerError';
import Service from './Service';

class ExampleService extends Service implements IExampleService {
  async index(): Promise<any> {
    try {
      const { data } = await this.api.get<any>('/examples');

      return data;
    } catch (err) {
      this.isDefaultError(err);
      throw new InternalServerError(err);
    }
  }

  async show(id: ID): Promise<IExample> {
    try {
      const { data } = await this.api.get<IExample>(`/examples/${id}`);
      return data;
    } catch (err) {
      this.isDefaultError(err);
      throw new InternalServerError(err);
    }
  }

  async create(example: ICreateExample): Promise<IExample> {
    try {
      const { data } = await this.api.post<IExample>('/examples', example, {
        headers: {
          contentType: 'multipart/form-data',
        },
      });

      return data;
    } catch (err) {
      this.isDefaultError(err);
      throw new InternalServerError(err);
    }
  }

  async update({ id, ...example }: IUpdateParams): Promise<void> {
    try {
      await this.api.put(`/examples/${id}`, { example });
    } catch (err) {
      this.isDefaultError(err);
      throw new InternalServerError(err);
    }
  }

  async delete(id: ID): Promise<void> {
    try {
      await this.api.delete(`/examples/${id}`);
    } catch (err) {
      this.isDefaultError(err);
      throw new InternalServerError(err);
    }
  }
}

export default new ExampleService();
