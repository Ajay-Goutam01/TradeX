import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPortfolio } from "../../portfolio/services/portfolio.api";

export const fetchHoldings = createAsyncThunk(
  "holding/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const portfolio = await getPortfolio();
      return portfolio.holdings || [];
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  },
);

const initialState = {
  holdings: [],
  loading: false,
  error: null,
};

const holdingSlice = createSlice({
  name: "holding",

  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder

      .addCase(fetchHoldings.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchHoldings.fulfilled, (state, action) => {
        state.loading = false;
        state.holdings = action.payload;
      })

      .addCase(fetchHoldings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default holdingSlice.reducer;
