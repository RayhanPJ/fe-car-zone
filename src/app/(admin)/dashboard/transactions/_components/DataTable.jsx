"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  TableCaption,
} from "@/components/ui/table";
import { Eye, Ellipsis, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import useSWR from "swr";
import { API_BASE_URL } from "@/constants/variables";
import { fetcher } from "@/api";
import formatCurrency from "@/lib/currencyFormat";
import { timeAgo } from "@/lib/utils"
import Swal from "sweetalert2";
import { Tooltip, TooltipProvider, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { denyPayment, confirmPayment } from "@/services/payment";
import { 
  Dialog, 
  DialogClose, 
  DialogContent, 
  DialogHeader, 
  DialogTrigger, 
  DialogTitle ,
  DialogDescription
} from "@/components/ui/dialog";
import TransactionDetail from "./TransactionDetail";
import { Spinner } from "@/components/common/Spinner";

const DataTable = () => {
  const { 
    data : transactions, 
    isLoading,
    isValidating,
    error ,
    mutate
 } = useSWR(API_BASE_URL + "/api/cms/transactions", fetcher, { revalidateOnFocus: true })

  const showCarImage = (img) => {
    // console.log(img)
    Swal.fire({
       imageUrl: img,
       showCloseButton: true,
       background: 'transparent',
       showConfirmButton: false,
    })
  }
  const handleConfirm = (order_data, transaction_id) => {
    // console.log(order_data)
    // return
    Swal.fire({
      title: "Are you sure?",
      text: "You can't change anything after you confirm this transaction",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Confirm it!"
    }).then((result) => {
      if (result.isConfirmed) {
        confirmPayment(order_data, transaction_id, (success, error) => {
          if (success) {
            mutate()
            Swal.fire({
              title: "Transaction Confirmed",
              text: "Transaction successfully confirmed",
              icon: "success"
            })
          } else {
            Swal.fire({
              title: "Transaction Failed to Confirm",
              text: error || "Something went wrong, please try again!",
              icon: "error"
            })
          }
        })
      }
    })
  }

    const handleDeny = (transaction_data) => {
      Swal.fire({
        title: "Are you sure?",
        text: "If you deny this transaction, this will also delete the transaction data",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Deny it!"
      }).then((result) => {
        if (result.isConfirmed) {
          denyPayment(transaction_data, (status, msg) => {
            if(status){
              mutate()
              Swal.fire({
                title: "Transaction Deleted",
                text: "Transaction succesfuly deleted",
                icon: "success"
              })
            }else{
              Swal.fire({
                title: "Transaction Failed to Delete",
                text: "Something went wrong, please try again!",
                icon: "error"
              })
            }
          })
          
        }
      })
    }

  if(error) return <div>Failed to fetch data</div>
  if(isLoading) return <Spinner className={"mx-auto my-10 "} /> 
  return (
    <>
      <Tabs defaultValue="pending">
        <TabsList>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="confirmed">Confirmed</TabsTrigger>
        </TabsList>
        <TabsContent value="confirmed">
            {/* confirmed table */}
            <Table className="w-full">
              <TableCaption>List of transaction data</TableCaption>
              <TableHeader>
                <TableRow className="text-center">
                  <TableCell>No</TableCell>
                  <TableCell>Car</TableCell>
                  <TableCell>Amount</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Payment Proof</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Bank</TableCell>
                  <TableCell>Detail</TableCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions?.data?.filter(t => t.order.status == true).map((transaction, i) => (
                  <TableRow className="text-center" key={transaction.id}>
                    <TableCell>{i + 1}</TableCell>
                    <TableCell>
                      <Link 
                        className="btn btn-link"
                        target="_blank"  
                        href={`/dashboard/cars/${transaction.order.car_id}?detail=true`}>
                        {transaction.order.car.name}
                      </Link>
                    </TableCell>
                    <TableCell>{formatCurrency(transaction.amount)}</TableCell>
                    <TableCell>{
                          transaction.order.status 
                          ? <Badge variant={"success"}>Confirmed</Badge>
                          : <Badge variant={"destructive"}>Pending</Badge> }
                        </TableCell>
                        <TableCell>
                          <button 
                              onClick={() => showCarImage(transaction.order.order_image)}
                              className="btn btn-ghost">
                              <Eye />
                          </button>
                        </TableCell>
                        <TableCell>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                              {timeAgo(transaction.created_at)}
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>{new Date(transaction.created_at).toLocaleString()}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </TableCell>
                      <TableCell className="h-full items-center gap-2 justify-center">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>{transaction.payment_provider}</TooltipTrigger>
                          <TooltipContent>
                          {transaction.no_rek}
                          </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </TableCell>
                      <TableCell>
                      <Dialog>
                        <DialogTrigger>
                          <button className="btn btn-ghost">
                            Detail
                          </button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Details</DialogTitle>
                          </DialogHeader>
                          <div>
                            <TransactionDetail 
                              transactionData={transaction}
                              orderID={transaction.order_id}
                              userID={transaction.order.user_id} />
                          </div>
                        </DialogContent>
                      </Dialog>
                      </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
        </TabsContent>
        <TabsContent value="pending">
            {/* pending table */}
            <Table className="w-full">
              <TableCaption>List of transaction data</TableCaption>
              <TableHeader>
                <TableRow className="text-center">
                  <TableCell>No</TableCell>
                  <TableCell>Car</TableCell>
                  <TableCell>Amount</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Payment Proof</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Bank</TableCell>
                  <TableCell>Detail</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions?.data?.filter(t => t.order.status == false).map((transaction, i) => (
                  <TableRow className="text-center" key={transaction.id}>
                    <TableCell>{i + 1}</TableCell>
                    <TableCell>
                      <Link 
                        className="btn btn-link"
                        target="_blank"  
                        href={`/dashboard/cars/${transaction.order.car_id}?detail=true`}>
                        {transaction.order.car.name}
                      </Link>
                    </TableCell>
                    <TableCell>{formatCurrency(transaction.amount)}</TableCell>
                    <TableCell>{
                          transaction.order.status 
                          ? <Badge variant={"success"}>Confirmed</Badge>
                          : <Badge variant={"destructive"}>Pending</Badge> }
                        </TableCell>
                        <TableCell>
                          <button 
                              onClick={() => showCarImage(transaction.order.order_image)}
                              className="btn btn-ghost">
                              <Eye />
                          </button>
                        </TableCell>
                        <TableCell>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                              {timeAgo(transaction.created_at)}
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>{new Date(transaction.created_at).toLocaleString()}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </TableCell>
                    <TableCell className="h-full items-center gap-2 justify-center">
                    <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>{transaction.payment_provider}</TooltipTrigger>
                          <TooltipContent>
                          {transaction.no_rek}
                          </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                    </TableCell>
                    <TableCell>
                      <Dialog>
                        <DialogTrigger>
                          <button className="btn btn-ghost">
                            Detail
                          </button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Details</DialogTitle>
                          </DialogHeader>
                          <div>
                            <TransactionDetail 
                              transactionData={transaction}
                              orderID={transaction.order_id}
                              userID={transaction.order.user_id} />
                          </div>
                        </DialogContent>
                      </Dialog>
                      </TableCell>
                    <TableCell>
                      <TooltipProvider>
                      <div className="flex items-center gap-2 justify-center">
                          <Button
                            // Ini Ubah menjadi Handle Acc
                            onClick={() => handleConfirm(transaction.order, transaction.id)}
                            className="btn btn-success hover:bg-green-600"
                          >
                            <Check className="size-4" />
                          </Button>
                          <Button variant="destructive" onClick={() => handleDeny(transaction)}>
                            <X />
                          </Button>
                        </div>
                      </TooltipProvider>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
        </TabsContent>
      </Tabs>

    </>
  );
};

export default DataTable;
