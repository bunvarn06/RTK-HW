import { updateCar } from "@/lib/auth";
import { CarCreateType, CarResponseType, CarUpdatetype } from "@/lib/cars/CarResponse";
import { headers } from "next/headers";
import { baseApi } from "../../baseApi";

export const carApi =baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // get ccar by using get method
    getCars: builder.query<CarResponseType[], { page: number; limit: number }>({
      query: ({ page, limit }) => `/cars?skip=${page}&limit=${limit}`,
    }),

    getCarById: builder.query<CarResponseType, string>({
      query: (id) => `/cars/${id}`,
    }),
    // create car

    createCar: builder.mutation<CarResponseType,{newCar:CarCreateType, accessToken:String}>({
      query:({newCar,accessToken})=>({
        url: 'cars',
        method:"POST",
        headers:{
          "Conent-Type":'application/json',"Authorization":`Bearer ${accessToken}`
        },
        
        body: newCar
        
      })
    }),
    // update car
       updateCar: builder.mutation<CarResponseType,{updateCar:CarUpdatetype, accessToken:String}>({
      query:({updateCar,accessToken})=>({
        url: 'cars/${id}',
        method:"PUT",
        headers:{
          "Conent-Type":'application/json',"Authorization":`Bearer ${accessToken}`
        },
        
        body: updateCar
        
      })
    }),

    // delete Car
        deleterCar: builder.mutation<CarResponseType,{accessToken:String,id:string}>({
      query:({accessToken,id})=>({
        url: 'cars/${id}',
        method:"DELET",
        headers:{
          "Conent-Type":'application/json',"Authorization":`Bearer ${accessToken}`
        }
        
      })
    }),
  }),
  overrideExisting: false
});

export const {
  useGetCarsQuery,
  useGetCarByIdQuery,
  useCreateCarMutation,
  useUpdateCarMutation,
  useDeleterCarMutation
} = carApi;
