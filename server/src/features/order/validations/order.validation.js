import { z } from "zod";

export const buyOrderSchema = z.object({
  stockId: z.string().trim().min(1, "Stock is required."),

  quantity: z
    .number({
      invalid_type_error: "Quantity must be a number.",
    })
    .int()
    .positive("Quantity must be greater than zero."),

  orderType: z.literal("MARKET").default("MARKET"),

  price: z.number().positive().optional(),
});

export const sellOrderSchema = buyOrderSchema;
