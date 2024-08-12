"use client"
import { Button } from "@/components/ui/button"
import { usePayment } from "../../checkout/_components/usePayment"
import { useRouter } from "next/navigation"
import { useAuth } from "@/hooks/useAuth"
import Swal from "sweetalert2"
import useSWR from "swr"
import { fetcher } from "@/api"

const BuyBtn = ({ car_id = null }) => {
   const { setCarID } = usePayment()
   const router = useRouter()
   const { auth } = useAuth()
   const { data : me } = useSWR("/api/auth/me", fetcher)

   const handleClick = () => {
    if(auth?.token){
      if(!me?.data.address || !me?.data.phone_number){
         Swal.fire({
            title: "Info is required!",
            text: "Please provide address and phone number to proceed.",
            icon: 'error',
            showCancelButton: true,
            showConfirmButton: true,
            confirmButtonText: "Complete Now"
         }).then(req => {
            if(req.isConfirmed){
               router.push("/profile")
            }
         })
      }else{
         setCarID(car_id)  
         router.push("/checkout")
      }

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