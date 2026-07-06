import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,

  marketStatus: null,
  indices: {},

  topGainers: [],
  topLosers: [],
  mostActive: [],

  searchQuery: "",
  searchResults: [],
  searching: false,

  selectedStock: null,
  history: [],
};

const marketSlice = createSlice({
  name: "market",

  initialState,

  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },

    setMarketHome(state, action) {
      state.marketStatus = action.payload.marketStatus;
      state.indices = action.payload.indices;
      state.topGainers = action.payload.topGainers;
      state.topLosers = action.payload.topLosers;
      state.mostActive = action.payload.mostActive;
    },

    setSearchResults(state, action) {
      state.searchResults = action.payload;
    },

    setSelectedStock(state, action) {
      state.selectedStock = action.payload;
    },

    setHistory(state, action) {
      state.history = action.payload;
    },
    setSearching(state, action) {
      state.searching = action.payload;
    },

    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },

    clearMarket(state) {
      state.searchResults = [];
      state.selectedStock = null;
      state.history = [];
    },
  },
});

export const {
  setLoading,
  setMarketHome,
  setSearchResults,
  setSelectedStock,
  setHistory,
  clearMarket,
  setSearching,
setSearchQuery,
} = marketSlice.actions;

export default marketSlice.reducer;
