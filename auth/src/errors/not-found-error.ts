import { CustomError } from './custom-error';

export class NotFoundError extends CustomError {
  statusCode = 404;
  reason = 'Route not found';

  constructor() {
    super('sorry route was not found');

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeError() {
    return [{ message: this.reason }];
  }
}
