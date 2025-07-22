import { CarResponseType } from "@/lib/cars/CarResponse";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const carApi = createApi({
  reducerPath: "carSellingApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}`,
  }),
  endpoints: (builder) => ({
    // get ccar by using get method
    getCars: builder.query<CarResponseType[], { page: number; limit: number }>({
      query: ({ page, limit }) => `/cars?skip=${page}&limit=${limit}`,
    }),

    getCarById: builder.query<CarResponseType, string>({
      query: (id) => `/cars/${id}`,
    }),
  }),
});

export const {
  useGetCarsQuery,
  useGetCarByIdQuery,
} = carApi;
