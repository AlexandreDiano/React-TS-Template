import { AppError } from './AppError';

class NetworkError extends AppError {
  static statusCode = 400;

  static i18nMessage = 'network_error';

  constructor(origin: unknown) {
    super({
      i18nMessage: NetworkError.i18nMessage,
      statusCode: NetworkError.statusCode,
      origin,
    });
  }
}

export { NetworkError };
