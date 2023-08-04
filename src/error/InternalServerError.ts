import { AppError } from '@/error/AppError';

class InternalServerError extends AppError {
  static statusCode = 500;

  static i18nMessage = 'internal_server';

  constructor(origin: unknown) {
    super({
      i18nMessage: InternalServerError.i18nMessage,
      statusCode: InternalServerError.statusCode,
      origin,
    });
  }
}

export { InternalServerError };
