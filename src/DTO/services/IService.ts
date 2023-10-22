import type { AxiosError, AxiosInstance } from 'axios';
import type { IError } from '@/DTO/IAppError';

export default abstract class IService {
  protected abstract readonly api: AxiosInstance;

  protected abstract isRequestError(err: unknown | IError): err is AxiosError;

  protected abstract isDefaultError(err: unknown): void;
}

export type { AxiosError, AxiosInstance };
