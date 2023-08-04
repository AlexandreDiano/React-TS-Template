import axios from 'axios';

import type { AxiosError, AxiosInstance } from '@/DTO/services/IService';
import IService from '@/DTO/services/IService';
import { AppError } from '@/error/AppError';

import { UnauthorizedError } from '@/error/AuthenticateErrors';
import {
  BadRequestError,
  ForeignKeyError,
  ParameterMissingError,
  UnpermittedParametersError,
  ValidateError,
} from '@/error/BadRequestError';
import { NotFoundError } from '@/error/NotFoundError';
import { NetworkError } from '@/error/NetworkError';

import api from './api';
import { type IError } from '@/DTO/IAppError';

class Service extends IService {
  protected readonly api: AxiosInstance;

  constructor() {
    super();
    this.api = api;
  }

  protected isRequestError(err: unknown): err is AxiosError {
    return axios.isAxiosError(err);
  }

  protected isDefaultError(err: unknown) {
    if (err instanceof AppError) throw err;

    if (this.isRequestError(err)) {
      if (err.response?.status === 404) throw new NotFoundError(err);

      if (err.response?.status === 401) throw new UnauthorizedError(err);

      if (err.response?.status === 400) {
        const errorData = err.response?.data as IError;
        if (errorData.code === ValidateError.i18nMessage) {
          throw new ValidateError(err.response.data as IError, err);
        }

        if (errorData.code === ForeignKeyError.i18nMessage) {
          throw new ForeignKeyError(err.response.data as IError, err);
        }

        if (errorData.code === ParameterMissingError.i18nMessage) {
          throw new ParameterMissingError(err.response.data as IError, err);
        }

        if (errorData.code === UnpermittedParametersError.i18nMessage) {
          throw new UnpermittedParametersError(
            err.response.data as IError,
            err,
          );
        }

        throw new BadRequestError(err.response.data as IError, err);
      }
    }

    if (err instanceof Error) {
      if (err.message === 'Network Error') throw new NetworkError(err);
    }
  }
}

export default Service;
