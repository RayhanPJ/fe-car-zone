"use client"

import { Card, CardContent, CardTitle, CardFooter } from "@/components/ui/card"
import Image from "next/image"
import GridContainer from "@/components/common/GridContainer"
import { SUVIcon } from "@/components/icons"
import { Tag } from "lucide-react"
import Link from "next/link"
import BuyBtn from "./BuyBtn"
import { carsData } from "@/constants/dummy"
 
const CarLists = () => {

  return (
   <>
   <GridContainer className={"my-10 mt-[300px] md:mt-[150px] main-container"}>
      {carsData.map((item, i) => (
         <Card key={i} className="shadow-md">
            <Image 
               src={item.image}
               width={300}
               height={300}

               />
            <CardContent className="mt-5">
               <CardTitle className="text-lg md:text-xl">{item.brand} {item.model}</CardTitle>
               <p className="my-2 text-sm md:text-lg">IDR. {item.price}</p>
               <div className="flex flex-col md:flex-row items-start my-3 md:items-center justify-between">
                  <span className="flex items-center gap-2 font-bold"><SUVIcon className={"size-7"} /> {item.type} </span>
                  <span className="flex items-center gap-2 font-bold"><Tag className="size-5" /> {item.brand} </span>
               </div>
            </CardContent>
            <CardFooter className="space-x-2">
               <BuyBtn car_id={item.id} />
               <Link 
                  className="btn btn-outline"
                  href={`/cars/${i}`}>
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