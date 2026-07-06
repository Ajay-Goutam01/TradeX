import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,

    marketStatus: null,

    indices: {},

    topGainers: [],

    topLosers: [],

    mostActive: [],
};

const homeSlice = createSlice({

    name: "home",

    initialState,

    reducers: {

        setLoading(state, action) {
            state.loading = action.payload;
        },

        setHome(state, action) {

            const home = action.payload;

            state.marketStatus = home.marketStatus;

            state.indices = home.indices;

            state.topGainers = home.topGainers;

            state.topLosers = home.topLosers;

            state.mostActive = home.mostActive;

        }

    }

});

export const {

    setLoading,

    setHome

} = homeSlice.actions;

export default homeSlice.reducer;