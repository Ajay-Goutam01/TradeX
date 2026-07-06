import {configureStore} from '@reduxjs/toolkit'
import { authReducer } from '../features/auth/index.js'
import homeReducer from "../features/home/state/home.slice";
import marketReducer from "../features/market/state/market.slice";

export const store = configureStore({
    reducer: {
         auth: authReducer,
            home: homeReducer,
            market: marketReducer
    }
})

 