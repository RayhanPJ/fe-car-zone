"use client"

import {
   Table,
   TableBody,
   TableCell,
   TableHeader,
   TableRow,
   TableCaption,
} from "@/components/ui/table";
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuLabel,
   DropdownMenuItem,
   DropdownMenuSeparator,
DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import useSWR from "swr"
import { API_BASE_URL } from "@/constants/variables"
import API, { fetcher } from "@/api"
import { Spinner } from "@/components/common/Spinner";
import formatCurrency from "@/lib/currencyFormat";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Ellipsis, Eye } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import Swal from "sweetalert2";

const OrdersTable = () => {
   const { 
      data : orders, 
      isLoading,
      isValidating,
      error 
   } = useSWR(API_BASE_URL + "/api/cms/orders", fetcher, { refreshInterval: 10000 })
   
   
   const showCarImage = (img) => {
      console.log(img)
      Swal.fire({
         imageUrl: img,
         showCloseButton: true,
         background: 'transparent',
         showConfirmButton: false,
      })
   }

   const confirmPayment = async (data) => {
      API.put("/api/cms/orders/" + data.id, { 
         status: true,
         car_id: data.car_id,
         total_price: data.total_price,
         order_image: data.order_image,
       })
         .then(() => { 
            Swal.fire({
               title: "Payment Confirmed",
               text: "Payment succesfuly confirmed",
               icon: "success"
             })
            }).catch(err => {
             Swal.fire({
                title: "Payment Failed to Confirmed",
                text: "Something went wrong, please try again!",
                icon: "error"
              })
            console.error(err)
          })
   }

  return (
   <>
   <ScrollArea className="h-[400px] w-full">
   <Table className="w-full sticky top-0">
        <TableCaption>List of transaction data</TableCaption>
        <TableHeader>
          <TableRow className="text-center">
            <TableCell>No</TableCell>
            <TableCell>Car</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Proof</TableCell>
            <TableCell>Confirm</TableCell>
          </TableRow>
        </TableHeader>
         <TableBody>
            {(error) && <TableRow><TableCell colSpan={6}>Failed to fetch data</TableCell></TableRow> }
            {(isLoading || isValidating) && <TableRow><TableCell colSpan={6}><Spinner /></TableCell></TableRow> }
            {!isLoading && orders?.data.map((transaction, i) => (
               <TableRow className="text-center" key={transaction.id}>
                  <TableCell>{i + 1}</TableCell>
                  <TableCell>{transaction.car.name}</TableCell>
                  <TableCell>{formatCurrency(transaction.total_price)}</TableCell>
                  <TableCell>{
                     transaction.status 
                     ? <Badge variant={"success"}>Confirmed</Badge>
                     : <Badge variant={"destructive"}>Pending</Badge> }
                  </TableCell>
                  <TableCell>
                     <button 
                        onClick={() => showCarImage(transaction.order_image)}
                        className="btn btn-ghost">
                        <Eye />
                     </button>
                  </TableCell>
                  <TableCell className="h-full items-center gap-2 justify-center">
                     <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                        <Button variant="ghost">
                           <Ellipsis />
                        </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>Update status</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                           <button 
                              onClick={() => {
                                 Swal.fire({
                                    title: "Are you sure?",
                                    text: "You won't be able to revert this!",
                                    icon: "warning",
                                    showCancelButton: true,
                                    confirmButtonColor: "#3085d6",
                                    cancelButtonColor: "#d33",
                                    confirmButtonText: "Yes, Confirm this order!"
                                  }).then((result) => {
                                    if (result.isConfirmed) {
                                     confirmPayment(transaction)
                                    }
                                  })
                              }}
                              className="flex w-full items-center gap-2">
                              <span>Set to Confirmed</span>
                           </button>
                        </DropdownMenuItem>
                        </DropdownMenuContent>
                     </DropdownMenu>
                  </TableCell>
               </TableRow>
            ))}
         </TableBody>
      </Table>
      </ScrollArea>
   </>
  )
}

export default OrdersTable