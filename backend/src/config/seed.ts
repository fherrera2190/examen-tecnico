import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const productoData: Prisma.ProductoCreateInput[] = [
  {
    nombre: "Producto A",
    descripcion: "Descripción del Producto A",
    precio: 100,
    cantidad: 50,
  },
  {
    nombre: "Producto B",
    descripcion: "Descripción del Producto B",
    precio: 200,
    cantidad: 30,
  },
  {
    nombre: "Producto C",
    descripcion: "Descripción del Producto C",
    precio: 150,
    cantidad: 20,
  },
  {
    nombre: "Producto D",
    descripcion: "Descripción del Producto D",
    precio: 300,
    cantidad: 10,
  },
  {
    nombre: "Producto E",
    descripcion: "Descripción del Producto E",
    precio: 250,
    cantidad: 5,
  },
];

export async function main() {
  for (const u of productoData) {
    await prisma.producto.create({ data: u });
  }
}

main();
