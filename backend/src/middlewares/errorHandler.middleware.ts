import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import { CustomError } from "../utils/custom.error";

export const errorHandler = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  //console.error("Error:", err);

  const statusCode = err.statusCode || 500;
  const message = statusCode === 500 ? "Internal Server Error" : err.message;

  res.status(statusCode).json({
    status: statusCode,
    message,
  });
};
