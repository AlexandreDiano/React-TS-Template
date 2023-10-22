import { AppError } from './AppError';

class UnauthorizedError extends AppError {
  static statusCode = 401;

  static i18nMessage = 'auth.unauthorized';

  constructor(origin: unknown) {
    super({
      i18nMessage: UnauthorizedError.i18nMessage,
      statusCode: UnauthorizedError.statusCode,
      origin,
    });
  }
}

class InvalidToken extends AppError {
  static statusCode = 401;

  static i18nMessage = 'auth.invalid_token';

  constructor(origin: unknown) {
    super({
      i18nMessage: InvalidToken.i18nMessage,
      statusCode: InvalidToken.statusCode,
      origin,
    });
  }
}

class NewPasswordRequired extends AppError {
  static statusCode = 302;

  static i18nMessage = 'auth.new_password_required';

  constructor(origin: unknown) {
    super({
      i18nMessage: NewPasswordRequired.i18nMessage,
      statusCode: NewPasswordRequired.statusCode,
      origin,
    });
  }
}

class NewPasswordSendError extends AppError {
  static statusCode = 300;

  static i18nMessage = 'auth.new_password_send';

  constructor(origin: unknown) {
    super({
      i18nMessage: NewPasswordSendError.i18nMessage,
      statusCode: NewPasswordSendError.statusCode,
      origin,
    });
  }
}

export {
  UnauthorizedError,
  InvalidToken,
  NewPasswordRequired,
  NewPasswordSendError,
};
