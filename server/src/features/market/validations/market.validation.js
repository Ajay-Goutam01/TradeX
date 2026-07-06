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

export const historySchema = z.object({
  symbol: z.string().trim().min(1).max(30),
});

export const historyQuerySchema = z.object({
  interval: z.enum([
    "1m",
    "2m",
    "5m",
    "15m",
    "30m",
    "60m",
    "90m",
    "1h",
    "1d",
    "5d",
    "1wk",
    "1mo",
    "3mo",
  ]).default("1d"),

  range: z.enum([
    "1d",
    "5d",
    "1mo",
    "3mo",
    "6mo",
    "1y",
    "2y",
    "5y",
    "10y",
    "max",
  ]).default("6mo"),
});