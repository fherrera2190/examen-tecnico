import { NextFunction, Request, Response } from "express";
import { CustomError } from "../utils/custom.error";

export const errorHandler = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({
      status: err.statusCode,
      message: err.message,
    });
  }

  //console.error("Error:", err);
  return res.status(500).json({
    error: "Internal Server Error",
  });
};
