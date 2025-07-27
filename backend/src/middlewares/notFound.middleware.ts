import { Request, NextFunction, Response } from "express";

export const notFound = (req: Request, res: Response, next: NextFunction) => {
  const error = new Error(`Page not found`);
  (error as any).statusCode = 409;
  return next(error);
};
