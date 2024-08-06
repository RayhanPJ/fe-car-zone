"use client"
import { Button } from "@/components/ui/button"
import { usePayment } from "../../checkout/_components/usePayment"
import { useRouter } from "next/navigation"

const BuyBtn = ({ car_id = null }) => {
   const { setCarID } = usePayment()
   const router = useRouter()

   const handleClick = () => {
    setCarID(car_id)  
    router.push("/checkout")
   }

   return (
      <>
         <Button 
            onClick={handleClick}
            className="capitalize w-full">
            Buy Now
         </Button>
      </>
   )
}

export default BuyBtn