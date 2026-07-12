import {configureStore} from '@reduxjs/toolkit'
import { authReducer } from '../features/auth/index.js'
import homeReducer from "../features/home/state/home.slice";
import marketReducer from "../features/market/state/market.slice";
import portfolioReducer from "../features/portfolio/state/portfolio.slice";
import orderReducer from "../features/orders/state/order.slice";
import watchlistReducer from "../features/watchlist/state/watchlist.slice";
import walletReducer from "../features/walllet/state/wallet.slice";
import transactionReducer from "../features/transaction/state/transaction.slice";
import holdingReducer from "../features/holding/state/holding.slice";

export const store = configureStore({
    reducer: {
         auth: authReducer,
            home: homeReducer,
            market: marketReducer,
            portfolio: portfolioReducer,
            order: orderReducer,
            watchlist: watchlistReducer,
            wallet: walletReducer,
            transaction: transactionReducer,
            holding:holdingReducer
    }
})

 