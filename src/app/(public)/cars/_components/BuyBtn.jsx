"use client"
import { Button } from "@/components/ui/button"
import { usePayment } from "../../checkout/_components/usePayment"
import { useRouter } from "next/navigation"
import { useAuth } from "@/hooks/useAuth"
import Swal from "sweetalert2"

const BuyBtn = ({ car_id = null }) => {
   const { setCarID } = usePayment()
   const router = useRouter()
   const { auth } = useAuth()

   const handleClick = () => {
    if(auth?.token){
      setCarID(car_id)  
      router.push("/checkout")
    }else{
      Swal.fire({
         title: "Account required!",
         text: "You have to use your account before buy this car",
         icon: 'error'
      })
    }
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