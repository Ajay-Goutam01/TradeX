import { z } from "zod";

export const addWatchlistSchema = z.object({
  stockId: z.string().trim().min(1, "Stock ID is required."),
});
