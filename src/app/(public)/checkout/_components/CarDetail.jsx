"use client"
import Image from "next/image"
import { SUVIcon } from "@/components/icons"
import { Tag } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { usePayment } from "./usePayment"
import { carsData } from "@/constants/dummy"
import { useRouter } from "next/navigation"

const CarDetail = () => {
   const { payment } = usePayment()
   const router = useRouter()
   const car = carsData.find(item => item.id == payment.carID)

   if(!car){
      router.replace("/cars")
      return null
   }

  return (
   <>
      <Accordion type="single" collapsible  className="border px-3">
         <AccordionItem value="item-1">
            <AccordionTrigger className="font-bold">Car Detail</AccordionTrigger>
            <AccordionContent>
            
            <figure className="w-full">
            <Image 
               src={car.image}
               width={500}
               height={500}
               className="mx-auto w-full object-cover"
               />
            </figure>
            <CardHeader>
               <CardTitle>{car.brand} {car.model}</CardTitle>
            </CardHeader>
            <CardContent>
               <div className="flex flex-col md:flex-row items-start my-3 md:items-center justify-between mb-5">
                  <span className="flex items-center gap-2 font-bold"><SUVIcon className={"size-7"} /> {car.type} </span>
                  <span className="flex items-center gap-2 font-bold"><Tag className="size-5" /> {car.brand} </span>
               </div>
            </CardContent>

            <Accordion type="single" collapsible  className="border px-3">
               <AccordionItem value="item-1">
                  <AccordionTrigger>Description</AccordionTrigger>
                  <AccordionContent>
                  {car.description}
                  </AccordionContent>
               </AccordionItem>
            </Accordion>
            </AccordionContent>
         </AccordionItem>
      </Accordion>
   </>
  )
}

export default CarDetail