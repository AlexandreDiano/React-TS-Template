import { AppError } from './AppError';

class NotFoundError extends AppError {
  static statusCode = 404;

  static i18nMessage = 'not_found';

  constructor(origin: unknown) {
    super({
      i18nMessage: NotFoundError.i18nMessage,
      statusCode: NotFoundError.statusCode,
      origin,
    });
  }
}

export { NotFoundError };
