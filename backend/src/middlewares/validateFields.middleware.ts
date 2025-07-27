import { NextFunction, Request, RequestHandler, Response } from "express";
import { ZodError, ZodTypeAny } from "zod";
import { CustomError } from "../interfaces";

export const validateFields =
  (schema: ZodTypeAny): RequestHandler =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      if (req.body === undefined) {
        req.body = {};
      }
      req.body = schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        // console.log(error);
        const customError: CustomError = new Error(
          "Validation Error: " +
            error.errors
              .map((e) => `${e.path.join(".")}: ${e.message}`)
              .join(", ")
        );
        customError.statusCode = 400;
        return next(customError);
      }
      next(error);
    }
  };
