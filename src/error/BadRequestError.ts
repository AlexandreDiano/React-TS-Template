import type { IError } from '@/DTO/IAppError';
import { AppError } from './AppError';

class BadRequestError extends AppError {
  static statusCode = 400;

  static i18nMessage = 'bad_request';

  constructor(error: IError, origin: unknown) {
    super({
      i18nMessage: BadRequestError.i18nMessage,
      origin,
      statusCode: BadRequestError.statusCode,
      error,
    });
  }
}

class ForeignKeyError extends AppError {
  static statusCode = 400;

  static i18nMessage = 'invalid_foreign_key';

  constructor(error: IError, origin: unknown) {
    super({
      i18nMessage: ForeignKeyError.i18nMessage,
      statusCode: ForeignKeyError.statusCode,
      origin,
      error,
    });
  }
}

class ValidateError extends AppError {
  static statusCode = 400;

  static i18nMessage = 'validate';

  constructor(error: IError, origin: unknown) {
    super({
      i18nMessage: ValidateError.i18nMessage,
      statusCode: ValidateError.statusCode,
      origin,
      error,
    });
  }
}

class ParameterMissingError extends AppError {
  static statusCode = 400;

  static i18nMessage = 'parameter_missing';

  constructor(error: IError, origin: unknown) {
    super({
      i18nMessage: ParameterMissingError.i18nMessage,
      statusCode: ParameterMissingError.statusCode,
      origin,
      error,
    });
  }
}

class UnpermittedParametersError extends AppError {
  static statusCode = 400;

  static i18nMessage = 'unpermitted';

  constructor(error: IError, origin: unknown) {
    super({
      i18nMessage: UnpermittedParametersError.i18nMessage,
      statusCode: UnpermittedParametersError.statusCode,
      origin,
      error,
    });
  }
}

export {
  BadRequestError,
  ForeignKeyError,
  ParameterMissingError,
  UnpermittedParametersError,
  ValidateError,
};
