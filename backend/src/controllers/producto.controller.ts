import { NextFunction, Request, Response } from "express";
import { prisma } from "../config";

export const getAllProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const productos = await prisma.producto.findMany();

  res.status(200).json(productos);
};

export const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const nuevoProducto = await prisma.producto.create({
    data: req.body,
  });

  res.status(201).json(nuevoProducto);
};

export const getProductById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const producto = await prisma.producto.findUnique({
    where: { id: Number(id) },
  });

  if (!producto) {
    const error = new Error(`Producto con ID ${id} no encontrado`);
    (error as any).statusCode = 404;
    return next(error);
  }

  res.status(200).json(producto);
};

export const updateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  console.log(req.body);

  const updatedProducto = await prisma.producto.update({
    where: { id: Number(id) },
    data: req.body,
  });
  res.json("product updated");
};

export const deleteProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  await prisma.producto.delete({ where: { id: Number(id) } });
  res.json({ message: "product deleted" });
};
