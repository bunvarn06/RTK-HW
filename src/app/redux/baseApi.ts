import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { headers } from "next/headers";
import { RootState } from "./store";

// update basequery
const baseQuery = fetchBaseQuery({
    baseUrl:process.env.NEXT_PUBLIC_API_URL,
    prepareHeaders:(headers,{getState})=>{
        const token = (getState() as RootState).auth.token;

        if(token){
            headers.set('authorization',`Bearer ${token}`)
        }
        return headers;
    }
})

export const baseApi=createApi({
 reducerPath: "baseApi",
  baseQuery,
  endpoints:()=>({})
})