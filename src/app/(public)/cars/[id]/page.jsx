import BreadCrumb from "@/components/common/BreadCrumb"
import Image from "next/image"
import { Card, CardFooter, CardContent, CardHeader } from "@/components/ui/card"
import { Tag, Car, Package } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { BackButton } from "@/components/common/BackButton"
import { Tooltip, TooltipTrigger, TooltipProvider, TooltipContent } from "@/components/ui/tooltip"
import formatCurrency from "@/lib/currencyFormat"
import BuyBtn from "../_components/BuyBtn"
import { API_BASE_URL } from "@/constants/variables"
import { Button } from "@/components/ui/button"

export const getCarByID = async(id) => {
   const req = await fetch(API_BASE_URL + "/api/cms/cars/"+ id, { next  : { revalidate: 10 }})
   const data = await req.json()
   
   if(!req.ok){
      throw new Error('Failed to fetch data')
   }

  return data
}

const CarsDetailPage = async ({ params }) => {
   // const car = carsData.find(item => item.id == params.id)
   const data = await getCarByID(params.id)
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
            src={data?.car.image_car}
            width={500}
            height={500}
            priority
            />
      </Card>
      <Card className="flex flex-col justify-between">
         <div>
         <CardHeader>
            <h1 className="text-2xl font-semibold capitalize">{data?.car.name}</h1>
         </CardHeader>
         <CardContent>
            <article>
               <p className="text-xl my-2">{formatCurrency(data?.car.price)}</p>

               <div className="flex flex-col gap-3 items-start my-3 justify-start">
                  <TooltipProvider>
                     <Tooltip>
                        <TooltipTrigger>
                           <span className="flex items-center gap-2 font-bold py-1 px-2 hover:bg-secondary rounded-md">
                              <Car className={"size-7"} />{data?.car.type.name || "unknow"} </span>
                        </TooltipTrigger>
                        <TooltipContent>
                           <p>Car Type</p>
                        </TooltipContent>
                     </Tooltip>
                     <Tooltip>
                        <TooltipTrigger>
                           <span className="flex items-center gap-2 font-bold py-1 px-2 hover:bg-secondary rounded-md">
                              <Tag className="size-5" /> {data?.car.brand.name} </span>
                        </TooltipTrigger>
                        <TooltipContent>
                           <p>Car Brand</p>
                        </TooltipContent>
                     </Tooltip>
                     <Tooltip>
                        <TooltipTrigger>
                           <span className="flex items-center gap-2 font-bold py-1 px-2 hover:bg-secondary rounded-md">
                              <Package className="size-5" /> 
                              {!data?.car.is_second ?
                                 <Badge variant="success">New</Badge> 
                                 : <Badge variant="outline">Second</Badge> 
                              }
                              </span>
                        </TooltipTrigger>
                        <TooltipContent>
                           <p>Car condition</p>
                        </TooltipContent>
                     </Tooltip>
                  </TooltipProvider>
               </div>
            </article>
         </CardContent>
         </div>
         <CardFooter>
            {data?.car.sold 
            ? <Button className="w-full" disabled>Sold</Button>
            : <BuyBtn car_id={data?.car.id} />
            }
         </CardFooter>
      </Card>
      <div className="col-span-2">
         <article>
            <h1 className="text-xl font-bold my-10">Description</h1>

            <ScrollArea className="resize-y p-3 border min-h-fit max-h-[300px] w-full overflow-y-auto">
            {data?.car.description}
            </ScrollArea>
         </article>

         <BackButton className={"w-fit mt-10"} />
      </div>
   </div>
   </>
  )
}

export const generateMetadata = async ({ params }) => {
   const data = await getCarByID(params.id)

   return {
      title: `"${data?.car.name}" detail - carzone`
   }
}

export default CarsDetailPage