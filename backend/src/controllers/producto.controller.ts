import { NextFunction, Request, Response } from "express";
import { prisma } from "../config";
import { CustomError } from "../utils/custom.error";

const getProductById = async (id: number) => {
  const product = await prisma.producto.findUnique({ where: { id } });

  if (!product) {
    throw CustomError.notFound(`Producto con ID ${id} no encontrado`);
  }

  return product;
};

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
  const existingProduct = await prisma.producto.findUnique({
    where: { nombre: req.body.nombre },
  });

  if (existingProduct) {
    throw CustomError.badRequest(
      `Producto con nombre ${req.body.nombre} ya existe`
    );
  }

  const nuevoProducto = await prisma.producto.create({
    data: req.body,
  });

  res.status(201).json(nuevoProducto);
};

export const updateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  await getProductById(Number(id));

  await prisma.producto.update({
    where: { id: Number(id) },
    data: req.body,
  });

  res.status(200).json({
    message: "Producto actualizado",
  });
};

export const deleteProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  await getProductById(Number(id));

  await prisma.producto.delete({ where: { id: Number(id) } });
  res.status(200).json({ message: "Producto borrado" });
};
