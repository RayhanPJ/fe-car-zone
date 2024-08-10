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
import useSWR from "swr"
import { API_BASE_URL } from "@/constants/variables"
import { fetcher } from "@/api"

const CarDetail = () => {
   const { payment } = usePayment()
   const router = useRouter()
   const { data, error } = useSWR(API_BASE_URL + "/api/cms/cars/" + payment.carID, fetcher)
   // console.log(data);
   if(error){
      console.log("failed to fetch cars")
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
               src={data?.car.image_car}
               width={500}
               height={500}
               className="mx-auto w-full object-cover"
               />
            </figure>
            <CardHeader>
               <CardTitle>{data?.car.name}</CardTitle>
            </CardHeader>
            <CardContent>
               <div className="flex flex-col md:flex-row items-start my-3 md:items-center justify-between mb-5">
                  <span className="flex items-center gap-2 font-bold"><SUVIcon className={"size-7"} /> {data?.car.type.name} </span>
                  <span className="flex items-center gap-2 font-bold"><Tag className="size-5" /> {data?.car.brand.name} </span>
               </div>
            </CardContent>

            <Accordion type="single" collapsible  className="border px-3">
               <AccordionItem value="item-1">
                  <AccordionTrigger>Description</AccordionTrigger>
                  <AccordionContent>
                  {data?.car.description}
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