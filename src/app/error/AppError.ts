class AppError extends Error {
  public statusCode: number;

  constructor(statuseCode: number, message: string, stack = '') {
    super(message);
    this.statusCode = statuseCode;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export default AppError;
