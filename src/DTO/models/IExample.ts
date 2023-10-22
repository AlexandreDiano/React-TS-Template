import type { ID } from '@/DTO/ID';

interface IExample {
  id: ID;
  title: string;
  company_id: ID;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  image?: string;
}

type IExampleTable = IExample;

export type { IExample, IExampleTable };
