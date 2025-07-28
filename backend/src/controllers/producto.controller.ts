import { NextFunction, Request, Response } from "express";
import { prisma } from "../config";
import { CustomError } from "../utils/custom.error";

export const getAllProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const productos = await prisma.producto.findMany();

    res.status(200).json(productos);
  } catch (error) {
    next(error);
  }
};

export const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
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
  } catch (error) {
    next(error);
  }
};

export const updateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    const existingProduct = await prisma.producto.findUnique({
      where: { id: Number(id) },
    });

    if (!existingProduct) {
      throw CustomError.notFound(`Producto con ID ${id} no encontrado`);
    }

    await prisma.producto.update({
      where: { id: Number(id) },
      data: req.body,
    });

    res.status(200).json({
      message: "Producto actualizado",
    });
  } catch (error) {
    next(CustomError.internalError());
  }
};

export const deleteProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    const existingProduct = await prisma.producto.findUnique({
      where: { id: Number(id) },
    });

    if (!existingProduct) {
      throw CustomError.notFound(`Producto con ID ${id} no encontrado`);
    }
    await prisma.producto.delete({ where: { id: Number(id) } });
    res.status(200).json({ message: "Producto borrado" });
  } catch (error) {
    next(error);
  }
};
