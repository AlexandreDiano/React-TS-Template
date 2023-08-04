interface IErrorDetail {
  resource: string;
  field: string;
  code: string;
}

interface IError {
  message: string;
  code: string;
  errors: IErrorDetail[];
  status: string;
}

interface IAppError {
  i18nMessage: string;
  statusCode: number;
  error?: IError;
  origin: unknown;
}

type IStatusKey = 'error' | 'info' | 'success';

interface IErrorTranslate {
  message: string;
  status: IStatusKey;
  fields?: IErrorDetail[];
  inputs: Record<string, string>;
  error?: IAppError;
}

interface IConstructError {
  i18nMessage: string;
  origin: unknown;
  statusCode?: number;
  error?: IError;
}

export type {
  IError,
  IAppError,
  IErrorDetail,
  IErrorTranslate,
  IStatusKey,
  IConstructError,
};
