import { z } from "zod";

export const searchStockSchema = z.object({
  q: z
    .string()
    .trim()
    .min(1, "Search query is required.")
    .max(50),
});

export const quoteSchema = z.object({
  symbol: z
    .string()
    .trim()
    .min(1, "Stock symbol is required.")
    .max(20),
});