import BreadCrumb from "@/components/common/BreadCrumb"
import Image from "next/image"
import { Card, CardFooter, CardContent, CardHeader } from "@/components/ui/card"
import { Tag, Car, Package } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
 } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { BackButton } from "@/components/common/BackButton"
import { Tooltip, TooltipTrigger, TooltipProvider, TooltipContent } from "@/components/ui/tooltip"
import { carsData } from "@/constants/dummy"
import formatCurrency from "@/lib/currencyFormat"

export const metadata = {
   title: "Car Detail - Carzone best car dealer website"
}

const CarsDetailPage = ({ params }) => {
   const car = carsData.find(item => item.id == params.id)
   console.log(car)
   return (
   <>
   <div className="bg-secondary">
      <div className="min-h-52 main-container flex items-center">
         <div className="">
            <h1 className="text-3xl font-bold mb-3">Car Detail</h1>
            <BreadCrumb />
         </div>
      </div>
   </div>

   <div className="grid grid-cols-1 md:grid-cols-2 p-6 mt-10 gap-3 main-container">
      <Card className="w-full overflow-hidden">
         <Image 
            className="w-full h-full object-cover object-center"
            src={car.image}
            width={500}
            height={500}
            />
      </Card>
      <Card>
         <CardHeader>
            <h1 className="text-2xl font-semibold capitalize">{car.brand} {car.model}</h1>
         </CardHeader>
         <CardContent>
            <article>
               <p className="text-xl my-4">{formatCurrency(car.price)}</p>

               <div className="flex flex-col md:flex-row items-start my-3 md:items-center justify-start gap-3">
                  <TooltipProvider>
                     <Tooltip>
                        <TooltipTrigger>
                           <span className="flex items-center gap-2 font-bold py-1 px-2 hover:bg-secondary rounded-md">
                              <Car className={"size-7"} /> {car.type} </span>
                        </TooltipTrigger>
                        <TooltipContent>
                           <p>Car Type</p>
                        </TooltipContent>
                     </Tooltip>
                     <Tooltip>
                        <TooltipTrigger>
                           <span className="flex items-center gap-2 font-bold py-1 px-2 hover:bg-secondary rounded-md">
                              <Tag className="size-5" /> {car.brand} </span>
                        </TooltipTrigger>
                        <TooltipContent>
                           <p>Car Brand</p>
                        </TooltipContent>
                     </Tooltip>
                     <Tooltip>
                        <TooltipTrigger>
                           <span className="flex items-center gap-2 font-bold py-1 px-2 hover:bg-secondary rounded-md">
                              <Package className="size-5" /> 
                              <Badge variant="success">New</Badge> </span>
                        </TooltipTrigger>
                        <TooltipContent>
                           <p>Car condition</p>
                        </TooltipContent>
                     </Tooltip>
                  </TooltipProvider>
               </div>

               <Accordion type="single" collapsible defaultValue="car-description">
                  <AccordionItem value="car-description">
                     <AccordionTrigger>Description</AccordionTrigger>
                     <AccordionContent className="flex flex-col gap-2">
                        {car.description}
                     </AccordionContent>
                  </AccordionItem>
               </Accordion>
            </article>
         </CardContent>
         <CardFooter>
            <Button className="w-full">Buy now</Button>
         </CardFooter>
      </Card>
   <BackButton className={"w-fit"} />
   </div>
   </>
  )
}

export default CarsDetailPage