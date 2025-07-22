
"use client"

import { useGetCarByIdQuery } from "@/app/redux/service/cars/car"


type carId ={
    carId:string;
}

export default function CarDetailComponent({cardId}:carId) {

    const {data, isLoading, error} = useGetCarByIdQuery(cardId)
    console.log(isLoading);
    console.log(error);
    

  return (
    <div>
        {
            <div>
                <p>{data?.make}</p>
                 <p>{data?.description}</p>
                 <Image
                 src={data?.image || ''}
                 width={250}
                 height={250}
                 alt={data?.model || ''}
                 />
            </div>
        }
    </div>
  )
}
