import httpStatus from "http-status";
import {Response, Request} from "express";
import AppError from "../utils/AppError";

const errorHandler = (err: AppError, req: Request, res: Response) => {
    let { statusCode, message } = err;
    if (!err.isOperational) {
      statusCode = httpStatus.INTERNAL_SERVER_ERROR;
      message = httpStatus[httpStatus.INTERNAL_SERVER_ERROR] as string;
    }
    const response = {
      code: statusCode,
      message
    };
    res.status(statusCode).send(response);
  };
  export default errorHandler;