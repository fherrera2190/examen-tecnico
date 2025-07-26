import { NextFunction, Request, Response } from "express";

export const getAllProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(200).json("all products");
};

export const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { nombre, descripcion, precio, cantidad } = req.body;

  res.status(201).json("product created");
};

export const updateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.json("product updated");
};

export const deleteProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.json({ message: "product deleted" });
};
