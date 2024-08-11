"use client"
import API from "@/api";

export const confirmPayment = async(order_data, transaction_id) => {
   // set order status to be true
   const order = await API.put("/api/cms/orders/" + order_data.id, { 
      status: true,
      car_id: order_data.car_id,
      total_price: order_data.total_price,
      order_image: order_data.order_image,
    })

    if(order.status !== 200){
      console.error("Order failed to update")
      return false
    }

   //  update car sold to be true
   const car = await API.put("/api/cms/cars/" + order_data.car_id, {
      brand_id: order_data.car.brand_id,
      description: order_data.car.description,
      image_car: order_data.car.image_car,
      is_second: order_data.car.is_second,
      name: order_data.car.name,
      price: order_data.car.price,
      sold: true,
      type_id: order_data.car.type_id
    })

    if(car.status !== 200){
      console.error("Car failed to update")
      return false
    }

   // insert new invoice
   const invoice = await API.post("/api/cms/invoices", { 
      order_id: order_data.id,
      transaction_id
    })

    return true
}

export const denyPayment = async (transaction_data) => {
   const transaction = await API.delete("/api/cms/transactions/" + transaction_data.id)
   if(transaction.status !== 200){
      console.error("Transactions failed to update")
      return false
   }
   const order = await API.delete("/api/cms/orders/" + transaction_data.order.id)
   if(order.status !== 200){
      console.error("Order failed to update")
      return false
   }
   return true
}