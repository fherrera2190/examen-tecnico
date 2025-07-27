import { z } from "zod";

export const createProductSchema = z.object({
  nombre: z
    .string()
    .min(1, "debe tener al menos 1 caracter")
    .max(255, "Nombre es demasiado largo."),
  descripcion: z
    .string()
    .min(20, "Descripción debe tener al menos 20 caracteres"),
  precio: z.coerce
    .number({
      required_error: "es requerido",
      invalid_type_error: "debe ser un número válido",
    })
    .min(0, "no puede ser negativo"),
  cantidad: z.coerce
    .number()
    .int({
      message: "debe ser un número entero",
    })
    .min(0, "no puede ser negativa"),
});


export const updateProductSchema = z
  .object({
    nombre: z.string().min(1, "debe tener al menos 1 caracter").optional(),
    descripcion: z
      .string()
      .min(20, "debe tener al menos 20 caracteres")
      .optional(),
    precio: z.coerce
      .number({
        required_error: "es requerido",
        invalid_type_error: "debe ser un número válido",
      })
      .min(0, "no puede ser negativo")
      .optional(),
    cantidad: z.coerce
      .number()
      .int({
        message: "debe ser un número entero",
      })
      .min(0, "no puede ser negativa")
      .optional(),
  })
  .refine((data) => Object.values(data).some((val) => val !== undefined), {
    message:
      "Al menos uno de los campos [nombre, descripcion, precio o cantidad] debe ser actualizado",
  });
