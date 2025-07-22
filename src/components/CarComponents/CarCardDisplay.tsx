"use client"

import { useGetCarsQuery } from "@/app/redux/service/cars/car"


export default function CarCardDisplay(){
    // declare data, isLoading, isFetchig ,error

    const {data ,isLoading ,isFetchig ,error} = useGetCarsQuery({
        page: 1,
        limit: 4
    });  //calling hook to apply with specific tack

    console.log(error);
    console.log(isLoading);
    console.log(isFetchig);

    return(
        <div>
          {
            data?.map((item,index)=>(
                <p key={index}>{item.make}</p>
            ))
          }

        </div>
    )
}