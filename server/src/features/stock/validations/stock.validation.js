import { z } from "zod";

export const searchStockSchema = z.object({
  q: z
    .string()
    .trim()
    .min(1, "Search query is required."),
});

export const getStocksSchema = z.object({
  page: z.coerce.number().min(1).default(1),

  limit: z.coerce.number().min(1).max(100).default(25),

  exchange: z.string().optional(),

  sector: z.string().optional(),

  industry: z.string().optional(),

  instrumentType: z.string().optional(),
});