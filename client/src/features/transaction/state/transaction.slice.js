import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTransactions } from "../services/transaction.api";

export const fetchTransactions = createAsyncThunk(
  "transaction/fetch",
  async (_, { rejectWithValue }) => {
    try {
      return await getTransactions();
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  },
);

const initialState = {
  transactions: [],
  loading: false,
  error: null,
};

const transactionSlice = createSlice({
  name: "transaction",

  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder

      .addCase(fetchTransactions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.loading = false;
        state.transactions = action.payload;
      })

      .addCase(fetchTransactions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default transactionSlice.reducer;
