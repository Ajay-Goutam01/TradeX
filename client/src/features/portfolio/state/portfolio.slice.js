import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getPortfolio } from "../services/portfolio.api";

export const fetchPortfolio = createAsyncThunk(
  "portfolio/fetch",
  async (_, { rejectWithValue }) => {
    try {
      return await getPortfolio();
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  },
);

const initialState = {
  portfolio: null,
  loading: false,
  error: null,
};

const portfolioSlice = createSlice({
  name: "portfolio",

  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder

      .addCase(fetchPortfolio.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchPortfolio.fulfilled, (state, action) => {
        state.loading = false;
        state.portfolio = action.payload;
      })

      .addCase(fetchPortfolio.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default portfolioSlice.reducer;
