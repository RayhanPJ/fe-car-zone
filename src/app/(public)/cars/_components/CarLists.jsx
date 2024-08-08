"use client"

import { Card, CardContent, CardTitle, CardFooter } from "@/components/ui/card"
import Image from "next/image"
import GridContainer from "@/components/common/GridContainer"
import { SUVIcon } from "@/components/icons"
import { Tag } from "lucide-react"
import Link from "next/link"
import BuyBtn from "./BuyBtn"
import { fetcher } from "@/api"
import useSWR from "swr"
import { CarCardSkeleton } from "@/components/common/Skeletons"
import formatCurrency from "@/lib/currencyFormat"
import { useSearchParams } from "next/navigation"
 
const CarLists = () => {
   const { data, isLoading, error} = useSWR("/api/cms/cars", fetcher)
   const params = useSearchParams()

   if (error) return <div className="p-7 bg-destructive text-destructive-foreground rounded-xl">{error}</div>
   if(isLoading) {
      return <>
       <GridContainer className={"my-10 mt-[300px] md:mt-[150px] main-container"}>
         {Array(4).fill(0).map((_, i) => (
            <CarCardSkeleton key={i}/>  
         ))}
       </GridContainer>
      </>
   }
  return (
   <>
   <GridContainer className={"my-10 mt-[300px] md:mt-[150px] main-container"}>
      {data?.cars.filter(item => (
         params.get("keyword") ?
         item.name.toLowerCase().includes(params.get("keyword")) ||
         item.brand.name.toLowerCase().includes(params.get("keyword")) ||
         item.type.name.toLowerCase().includes(params.get("keyword"))
         : item
      )).map((item, i) => (
         <Card key={item.ID} className="shadow-md group">
            <Image 
               src={item.image_car}
               width={300}
               height={300}
               priority
               style={{ height: 'auto', width: 'auto' }}
               />
            <CardContent className="mt-5">
               <CardTitle className="text-lg md:text-xl sm:line-clamp-1 group-hover:line-clamp-none">{item.brand.name} {item.name}</CardTitle>
               <p className="my-2 text-sm md:text-lg">{formatCurrency(item.price)}</p>
               <div className="flex flex-col md:flex-row items-start my-3 md:items-center justify-between">
                  <span className="flex capitalize items-center gap-2 font-bold"><SUVIcon className={"size-7"} /> {item.type.name} </span>
                  <span className="flex capitalize items-center gap-2 font-bold"><Tag className="size-5" /> {item.brand.name} </span>
               </div>
            </CardContent>
            <CardFooter className="space-x-2">
               <BuyBtn car_id={item.ID} />
               <Link 
                  className="btn btn-outline"
                  href={`/cars/${item.ID}`}>
                  Detail
               </Link>
            </CardFooter>
         </Card>
      ))}
   </GridContainer>
   </>
  )
}

export default CarLists