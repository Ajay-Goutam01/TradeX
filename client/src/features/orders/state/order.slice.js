import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getOrders, buyStock, sellStock } from "../services/order.api";

export const fetchOrders = createAsyncThunk(
  "orders/fetch",
  async (_, { rejectWithValue }) => {
    try {
      return await getOrders();
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  },
);

export const placeBuyOrder = createAsyncThunk(
  "orders/buy",
  async (payload, { rejectWithValue }) => {
    try {
      return await buyStock(payload);
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  },
);

export const placeSellOrder = createAsyncThunk(
  "orders/sell",
  async (payload, { rejectWithValue }) => {
    try {
      return await sellStock(payload);
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  },
);

const initialState = {
  orders: [],
  loading: false,
  placing: false,
  error: null,
};

const orderSlice = createSlice({
  name: "orders",

  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder

      // GET ORDERS

      .addCase(fetchOrders.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
      })

      .addCase(fetchOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // BUY

      .addCase(placeBuyOrder.pending, (state) => {
        state.placing = true;
      })

      .addCase(placeBuyOrder.fulfilled, (state, action) => {
        state.placing = false;

        state.orders.unshift(action.payload);
      })

      .addCase(placeBuyOrder.rejected, (state, action) => {
        state.placing = false;

        state.error = action.payload;
      })

      // SELL

      .addCase(placeSellOrder.pending, (state) => {
        state.placing = true;
      })

      .addCase(placeSellOrder.fulfilled, (state, action) => {
        state.placing = false;

        state.orders.unshift(action.payload);
      })

      .addCase(placeSellOrder.rejected, (state, action) => {
        state.placing = false;

        state.error = action.payload;
      });
  },
});

export default orderSlice.reducer;
