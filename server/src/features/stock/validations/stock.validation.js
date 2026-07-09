import { z } from "zod";

export const searchStockSchema = z.object({
  q: z
    .string()
    .trim()
    .min(1, "Search query is required.")
    .max(100, "Search query is too long."),
});

export const getStocksSchema = z.object({
  page: z.coerce.number().int().min(1).default(1),

  limit: z.coerce.number().int().min(1).max(100).default(25),

  exchange: z.enum(["NSE", "BSE"]).optional(),

  sector: z.string().trim().optional(),

  industry: z.string().trim().optional(),

  instrumentType: z
    .enum(["EQUITY", "ETF", "INDEX", "FUTURE", "OPTION", "MUTUAL_FUND"])
    .optional(),
});
