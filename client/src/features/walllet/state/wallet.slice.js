import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getWallet, resetWallet } from "../services/wallet.api";

export const fetchWallet = createAsyncThunk(
  "wallet/fetch",
  async (_, { rejectWithValue }) => {
    try {
      return await getWallet();
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  },
);

export const resetUserWallet = createAsyncThunk(
  "wallet/reset",
  async (_, { rejectWithValue }) => {
    try {
      return await resetWallet();
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  },
);

const initialState = {
  wallet: null,
  loading: false,
  error: null,
};

const walletSlice = createSlice({
  name: "wallet",

  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder

      .addCase(fetchWallet.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchWallet.fulfilled, (state, action) => {
        state.loading = false;
        state.wallet = action.payload;
      })

      .addCase(fetchWallet.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(resetUserWallet.fulfilled, (state, action) => {
        state.wallet = action.payload;
      });
  },
});

export default walletSlice.reducer;
