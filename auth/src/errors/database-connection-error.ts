import { CustomError } from './custom-error';

export class DatabaseConnectionError extends CustomError {
  statusCode = 500;
  reason = 'error connectiong to database';

  constructor() {
    super('error with associated withi DB');

    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeError() {
    return [{ message: this.reason }];
  }
}
