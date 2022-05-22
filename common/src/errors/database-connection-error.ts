import { CustomError } from './custom-error';

export class DatabaseConnectionError extends CustomError {
  statusCode = 500;
  reason = 'error connecting to database';

  constructor() {
    super('error associated with DB');

    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeError() {
    return [{ message: this.reason }];
  }
}
