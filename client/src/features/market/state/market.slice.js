import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {
  getHome,
  searchStocks,
  getMarketDetails,
  getHistory,
} from "../services/market.api";

export const fetchHome = createAsyncThunk("market/home", async () => {
  return await getHome();
});

export const fetchSearchStocks = createAsyncThunk(
  "market/search",
  async (query) => {
    if (!query?.trim()) return [];

    return await searchStocks(query);
  },
);

export const fetchMarketDetails = createAsyncThunk(
  "market/details",
  async (symbol) => {
    return await getMarketDetails(symbol);
  },
);

export const fetchHistory = createAsyncThunk(
  "market/history",
  async ({ symbol, interval = "1d", range = "1mo" }) => {
    return await getHistory(symbol, interval, range);
  },
);

const initialState = {
  loading: false,

  searching: false,

  error: null,

  home: null,

  stock: null,

  chart: [],

  searchResults: [],

  indices: {},

  topGainers: [],

  topLosers: [],

  mostActive: [],

  marketStatus: null,
};

const marketSlice = createSlice({
  name: "market",

  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder

      // HOME

      .addCase(fetchHome.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchHome.fulfilled, (state, action) => {
        state.loading = false;

        state.home = action.payload;

        state.indices = action.payload.indices;

        state.marketStatus = action.payload.marketStatus;

        state.topGainers = action.payload.topGainers;

        state.topLosers = action.payload.topLosers;

        state.mostActive = action.payload.mostActive;
      })

      .addCase(fetchHome.rejected, (state, action) => {
        state.loading = false;

        state.error = action.error.message;
      })

      // SEARCH

      .addCase(fetchSearchStocks.pending, (state) => {
        state.searching = true;
      })

      .addCase(fetchSearchStocks.fulfilled, (state, action) => {
        state.searching = false;

        state.searchResults = action.payload;
      })

      .addCase(fetchSearchStocks.rejected, (state) => {
        state.searching = false;
      })

      // DETAILS

      .addCase(fetchMarketDetails.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchMarketDetails.fulfilled, (state, action) => {
        state.loading = false;

        state.stock = action.payload;
      })

      .addCase(fetchMarketDetails.rejected, (state, action) => {
        state.loading = false;

        state.error = action.error.message;
      })

      // HISTORY

      .addCase(fetchHistory.fulfilled, (state, action) => {
        state.chart = action.payload.candles;
      });
  },
});

export default marketSlice.reducer;
