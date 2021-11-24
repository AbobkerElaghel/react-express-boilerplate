class AppError extends Error {
    // isOperational is to check of the the error is operational error not programming error or an error with one of the packages
    isOperational: boolean;
    statusCode: number;

    constructor(statusCode: number, message: string, isOperational = true, stack = '') {
      super(message);
      this.statusCode = statusCode;
      this.isOperational = isOperational;
      if (stack) {
        this.stack = stack;
      } else {
        Error.captureStackTrace(this, this.constructor);
      }
    }
  }
export default AppError;