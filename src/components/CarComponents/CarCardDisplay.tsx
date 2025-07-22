"use client"

import { useGetCarsQuery } from "@/app/redux/service/cars/car"
import { CardCarousel } from "../ui/card-carousel";
export default function CarCardDisplay(){
    // declare data, isLoading, isFetchig ,error

    const {data ,isLoading ,isFetchig ,error} = useGetCarsQuery({
        page: 1,
        limit: 4
    });  //calling hook to apply with specific tack

    console.log(error);
    console.log(isLoading);
    console.log(isFetchig);

    const images = data?.map(item=>({
        src: item.image?.startsWith('http')? item.image:`https://car-nextjs-api.cheatdev.online/${item.image}`,
        alt: item.make
    })) ?? [];

    return(
        <div>

                <CardCarousel
        images={images}
        autoplayDelay={2000}
        showPagination={true}
        showNavigation={true}
      />

        </div>
    )
}