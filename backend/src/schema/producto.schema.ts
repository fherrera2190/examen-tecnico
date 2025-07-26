import { z } from "zod";

export const createProductSchema = z.object({
  nombre: z
    .string()
    .min(1, "Nombre no puede estar vacío")
    .max(255, "Nombre es demasiado largo."),
  descripcion: z.string().min(20, "Descripción no puede estar vacía"),
  precio: z.coerce
    .number()
    .transform((val) => Number(val))
    .refine((val) => !isNaN(val), {
      message: "Precio debe ser un número válido",
    }),
  cantidad: z.coerce.number().int().min(0, "Cantidad no puede ser negativa"),
});

export const updateProductSchema = z.object({
  nombre: z
    .string()
    .min(1, "Nombre no puede estar vacío")
    .max(255, "Nombre es demasiado largo."),
  descripcion: z.string().min(20, "Descripción no puede estar vacía"),
  precio: z.coerce
    .number()
    .transform((val) => Number(val))
    .refine((val) => !isNaN(val), {
      message: "Precio debe ser un número válido",
    }),
  cantidad: z.coerce.number().int().min(0, "Cantidad no puede ser negativa"),
});
