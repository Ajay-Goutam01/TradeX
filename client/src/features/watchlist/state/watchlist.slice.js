import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {
  getWatchlist,
  addToWatchlist,
  removeFromWatchlist,
} from "../services/watchlist.api";

export const fetchWatchlist = createAsyncThunk(
  "watchlist/fetch",
  async (_, { rejectWithValue }) => {
    try {
      return await getWatchlist();
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  },
);

export const addStock = createAsyncThunk(
  "watchlist/add",
  async (stockId, { rejectWithValue }) => {
    try {
      return await addToWatchlist(stockId);
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  },
);

export const removeStock = createAsyncThunk(
  "watchlist/remove",
  async (stockId, { rejectWithValue }) => {
    try {
      await removeFromWatchlist(stockId);

      return stockId;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  },
);

const watchlistSlice = createSlice({
  name: "watchlist",

  initialState: {
    watchlist: [],
    loading: false,
    error: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder

      .addCase(fetchWatchlist.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchWatchlist.fulfilled, (state, action) => {
        state.loading = false;
        state.watchlist = action.payload;
      })

      .addCase(fetchWatchlist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(addStock.fulfilled, (state, action) => {
        state.watchlist.unshift(action.payload);
      })

      .addCase(removeStock.fulfilled, (state, action) => {
        state.watchlist = state.watchlist.filter(
          (item) => item.stock._id !== action.payload,
        );
      });
  },
});

export default watchlistSlice.reducer;
