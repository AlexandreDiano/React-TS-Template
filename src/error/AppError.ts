import type { IAppError, IConstructError, IError } from '@/DTO/IAppError';

class AppError implements IAppError {
  public readonly i18nMessage: string;

  public readonly statusCode: number;

  public readonly error?: IError;

  public readonly origin: unknown;

  constructor({
    i18nMessage,
    origin,
    statusCode = 400,
    error = undefined,
  }: IConstructError) {
    this.i18nMessage = i18nMessage;
    this.statusCode = statusCode;
    this.error = error;
    this.origin = origin;
  }
}

export { AppError };
