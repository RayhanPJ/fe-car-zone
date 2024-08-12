"use client"
import useSWR from "swr"
import { fetcher } from "@/api"
import { Spinner } from "@/components/common/Spinner"
import Image from "next/image"
import formatCurrency from "@/lib/currencyFormat"
import { Badge } from "@/components/ui/badge"

const TransactionDetail = ({ userID, transactionData, orderID }) => {
  const { data : orders, isLoading } = useSWR("/api/cms/orders/" + userID, fetcher)
  // console.log(orders)
  // console.log(orderID)
  // console.log(transactionData)

  if(isLoading) return <Spinner className={"mx-auto my-10"} />

  const orderData = orders?.data.filter(o => o.id == orderID)
  // console.log(transactionData)
  console.log(orderData)
  return (
  <>
    <div className="">
      <h1 className="my-5 text-lg">Car Detail</h1>
      <div className="flex items-start gap-3">
        <Image 
          src={orderData[0].car.image_car}
          width={250}
          height={175}
          />
        <div className="">
          <h1 className="text-lg font-bold">{orderData[0].car.name}</h1>
          <p>{formatCurrency(orderData[0].car.price)}</p>
          {orderData[0].car.status
          ? <Badge variant={"success"}>Available</Badge>
          : <Badge variant={"destructive"}>Sold</Badge>
          }
          {orderData[0].car.is_second
          ? <Badge >Second</Badge>
          : <Badge variant={"success"}>New</Badge>
          }
        </div>
      </div>
      <div className="flex items-start gap-3">  
        <div className="">
          <h1 className="my-5 text-lg">Transaction Detail</h1>
          <div className="flex items-start gap-3">
            <div className="">
              <p>Payment Provider : {transactionData.payment_provider}</p>
              <p>Rek : {transactionData.no_rek}</p>
              <p>Total Amount : {formatCurrency(transactionData.amount)}</p>
              <p>Status : {transactionData.order.status
              ? <Badge variant={"success"}>Confirmed</Badge>
              : <Badge variant={"destructive"}>Pending</Badge>
              }</p>
            </div>
          </div>
        </div>
        <div className="">
          <h1 className="my-5 text-lg">User Detail</h1>
          <div className="flex items-start gap-3">
            <div className="">
              <p>ID : {orderData[0].user.id}</p>
              <p>Username : {orderData[0].user.username}</p>
              <p>Email : {orderData[0].user.email}</p>
              <p>Phone : {orderData[0].user.phone_number || "-"}</p>
              <p>Address : {orderData[0].user.address || "-"}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </>
  )
}

export default TransactionDetail