"use client"
import useSWR from "swr"
import API, { fetcher } from "@/api"
import { useAuth } from "@/hooks/useAuth"
import { Spinner } from "@/components/common/Spinner"
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip"
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
 } from "@/components/ui/card"
 import Image from "next/image"
 import Link from "next/link"
import { timeAgo } from "@/lib/utils"
import { useCallback } from "react"
import Swal from "sweetalert2"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"


const OrderList = () => {
   const { auth } = useAuth()
   const { data : orders,isLoading } = useSWR("/api/cms/orders/" + auth.userId, fetcher, { revalidateOnFocus: true })

   const showImage = useCallback((img) => {
      Swal.fire({
         imageUrl: img,
         showConfirmButton: false,
         background: 'transparent',
         showCloseButton: true
      })
   }, [])

   console.log(orders)

  if (isLoading) return <div className="mx-auto"><Spinner /></div>
  return (
   <>
      {orders?.data.map((item => (
         <Card key={item.id} className="p-5">
            <CardHeader className="flex items-center justify-between flex-row">
               <TooltipProvider>
                  <Tooltip >
                     <TooltipTrigger className="text-left">
                        <span>Order created : {timeAgo(item.created_at)}</span>
                     </TooltipTrigger>
                     <TooltipContent className="text-left">
                        <p>{new Date(item.created_at).toLocaleString()}</p>
                     </TooltipContent>
                  </Tooltip>
               </TooltipProvider>
               {item.status 
                  ? <Badge variant={"success"}>Success</Badge>
                  : <Badge variant={"destructive"}>Pending</Badge>
               }  
            </CardHeader>
            <CardContent className="flex items-start gap-3">
               <Image 
                  src={item.car.image_car}
                  width={100}
                  height={100}
                  />
               <div className="">
                  <h1 className="text-lg font-bold">{item.car.name}</h1>
                  {item.status &&
                     <p>Confirmed at : {new Date(item.car.updated_at).toLocaleString()}</p>
                  }
               </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
               <Button variant={"outline"} onClick={() => showImage(item.order_image)}>
                  View Proof
               </Button>
               {item.status &&
                  <Link className="btn btn-default" href={`/invoice/${item.id}`}>
                     View invoice
                  </Link>
               }
            </CardFooter>
         </Card>
      )))}
   </>
  )
}

export default OrderList