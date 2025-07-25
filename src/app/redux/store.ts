import {configureStore} from '@reduxjs/toolkit'
import { baseApi } from './baseApi';
import  authSlice  from './feature/auth/authSlice';

export const makeStore = () =>{
    return configureStore({
        reducer:{
            [baseApi.reducerPath]: baseApi.reducer,
            auth: authSlice

        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(baseApi.middleware),


    })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
