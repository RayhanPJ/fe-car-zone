"use client"

import { Card, CardContent, CardTitle, CardFooter } from "@/components/ui/card"
import Image from "next/image"
import GridContainer from "@/components/common/GridContainer"
import { Car, Tag } from "lucide-react"
import Link from "next/link"
import BuyBtn from "./BuyBtn"
import { fetcher } from "@/api"
import useSWR from "swr"
import { CarCardSkeleton } from "@/components/common/Skeletons"
import formatCurrency from "@/lib/currencyFormat"
import { useSearchParams } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { AspectRatio } from "@/components/ui/aspect-ratio"
 
const CarLists = () => {
   const { data, isLoading, error} = useSWR("/api/cms/cars", fetcher, { revalidateOnFocus: true})
   const params = useSearchParams()

   if (error) return <div className="p-7 bg-destructive text-destructive-foreground rounded-xl">{error}</div>
   if(isLoading) {
      return <>
       <GridContainer className={"my-10 mt-[100px] md:mt-[150px]  main-container"}>
         {Array(4).fill(0).map((_, i) => (
            <CarCardSkeleton key={i}/>  
         ))}
       </GridContainer>
      </>
   }
  return (
   <>
   <GridContainer className={"my-10 mt-[100px] md:mt-[150px] main-container"}>
      {data?.cars.filter(item => (
         params.get("keyword") ?
         item.name.toLowerCase().includes(params.get("keyword")) ||
         item.brand.name.toLowerCase().includes(params.get("keyword")) ||
         item.type.name.toLowerCase().includes(params.get("keyword"))
         : item
      )).filter(c => c.sold == false).map((item) => (
         <Card key={item.ID} className="shadow-md group overflow-hidden flex flex-col justify-between">
            <AspectRatio ratio={16 / 9} className="overflow-hidden">
               <Image 
                  src={item.image_car}
                  width={300}
                  height={300}
                  priority
                  className="w-full h-full max-h-[300px] object-cover group-hover:scale-[1.1] transitio duration-200"
                  />
            </AspectRatio>
            <CardContent className="mt-5">
               <CardTitle className="text-lg md:text-xl line-clamp-1 group-hover:line-clamp-none">{item.name}</CardTitle>
               <p className="my-2 text-sm md:text-lg">{formatCurrency(item.price)}</p>
               <div className="flex flex-col items-start my-3 gap-2 justify-between">
                  <p className="flex text-xs capitalize items-center gap-2 font-bold"><Car className={"size-7"} />{item.type.name} </p>
                  <p className="flex text-xs capitalize items-center gap-2 font-bold"><Tag className="size-5" /> {item.brand.name} </p>
                  <p className="flex capitalize items-center gap-2 font-bold"> {item.is_second ? <Badge variant={'outline'}>Second</Badge> : <Badge variant="success">New</Badge> } </p>
               </div>
            </CardContent>
            <div className="flex flex-col sm:flex-row items-center gap-3 justify-between p-2">
            <BuyBtn car_id={item.ID} />
            <Link 
               className="btn btn-outline w-full"
               href={`/cars/${item.ID}`}>
               Detail
            </Link>
            </div>
         </Card>
      ))}
   </GridContainer>
   </>
  )
}

export default CarLists