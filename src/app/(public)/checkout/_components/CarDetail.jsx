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

const CarDetail = () => {
  return (
   <>
      <Accordion type="single" collapsible  className="border px-3">
         <AccordionItem value="item-1">
            <AccordionTrigger className="font-bold">Detail Mobil</AccordionTrigger>
            <AccordionContent>
            
            <figure className="w-full">
            <Image 
               src={"https://imgd.aeplcdn.com/370x208/n/cw/ec/130591/fronx-exterior-right-front-three-quarter-109.jpeg"}
               width={500}
               height={500}
               className="mx-auto w-full object-cover"
               />
            </figure>
            <CardHeader>
               <CardTitle>Lorem ipsum dolor sit.</CardTitle>
            </CardHeader>
            <CardContent>
               <div className="flex flex-col md:flex-row items-start my-3 md:items-center justify-between mb-5">
                  <span className="flex items-center gap-2 font-bold"><SUVIcon className={"size-7"} /> SUV </span>
                  <span className="flex items-center gap-2 font-bold"><Tag className="size-5" /> Suzuki </span>
               </div>
            </CardContent>

            <Accordion type="single" collapsible  className="border px-3">
               <AccordionItem value="item-1">
                  <AccordionTrigger>Deskripsi</AccordionTrigger>
                  <AccordionContent>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est ea accusamus vitae excepturi quas mollitia atque ab minima, tempore cum odit qui totam incidunt fuga veniam? Sunt commodi rerum ipsa repellendus? Optio eveniet rem repudiandae rerum, possimus magnam, sapiente nihil totam, magni mollitia voluptate voluptates unde cupiditate veniam?
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