import { NextFunction, Request, Response } from "express";
import { CustomError } from "../interfaces";
import { Prisma } from "@prisma/client";

export const errorHandler = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  //console.error(err);
  //console.error(`Error ${statusCode}: ${message}`);

  res.status(statusCode).json({
    error: {
      message: message,
    },
  });
};
