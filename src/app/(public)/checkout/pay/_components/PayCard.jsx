"use client"
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard"
import { usePayment } from "../../_components/usePayment"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { UploadIcon } from "lucide-react"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useEffect, useLayoutEffect, useState } from "react"
import { Copy, Check, Landmark } from "lucide-react"


const PayCard = () => {
   const { payment } = usePayment()
   const { copiedText, copy } = useCopyToClipboard()
   const router = useRouter()
   const [selectedImage, setSelectedImage] = useState(null)

   useLayoutEffect(() => {
      if(!payment.noRek || !payment.paymentProvider || !payment.totalAmount){
         router.push("/cars")
      }
   }, [payment])
   
   if(!payment.noRek || !payment.paymentProvider || !payment.totalAmount){
      return <>
         <Card className="p-5">
            Payment information not found!
         </Card>
      </>
   }

   const handleImage = (e) => {
      const file = e.target.files[0]
      setSelectedImage(URL.createObjectURL(file))
   }

   useEffect(() => {
      console.log(selectedImage)
   }, [selectedImage])

  return (
   <>
      <div className="mt-10 flex flex-col gap-3">
         <div className="my-3">
            <Label className="mb-3">Payment provider</Label>
            <div className="flex items-center gap-2 border border-secondary p-1 rounded-md">
               <Card className="p-2">
                  <Landmark />
               </Card>
               <span>{payment.paymentProvider}</span>
            </div>
         </div>
         <div className="">
            <Label className="mb-3">Bank account number (CarZone Indonesia)</Label>
            <div className="flex items-center gap-2  border border-secondary p-1 rounded-md justify-between px-2">
               <span>{payment.noRek}</span>
               <Button 
                     onClick={() => copy(payment.noRek)}
                  >{(copiedText == payment.noRek) ? <Check />  : <Copy /> } </Button>
            </div>
         </div>
         <div className="">
            <Label className="mb-3">Total</Label>
            <div className="flex justify-between px-2 items-center gap-2  border border-secondary p-1 rounded-md">
               <span>{payment.totalAmount}</span>
               <Button 
                     onClick={() => copy(payment.totalAmount)}
                  >{(copiedText == payment.totalAmount) ? <Check />  : <Copy /> } </Button>
            </div>
         </div>
      </div>
      <form action="">
         <div className="my-3">
            <span>Upload transfer proof</span>
            <label htmlFor="proof-payment" className="mt-4 grid gap-4 cursor-pointer">
               <div className="flex py-10 items-center justify-center rounded-md border-2 border-dashed border-muted transition-colors hover:border-primary">
                  <div className="text-center">
                  {!selectedImage 
                     ?<>
                        <UploadIcon className="mx-auto h-12 w-12 text-muted-foreground" />
                        <div className="mt-4 font-medium text-muted-foreground">Click to select image</div>
                     </>
                     : <>
                        <div className="w-full max-w-xl h-full max-h-max">
                           <img src={selectedImage} width={300} height={500} />
                           <div className="mt-4 font-medium text-muted-foreground">Click to change</div>
                        </div>
                     </>
                  }
                  <Input onChange={handleImage} id="proof-payment" type="file" accept="image/*" className="sr-only" />
                  </div>
               </div>
            </label>
         </div>

         <Button className="my-10">Send payment confirmation</Button>
      </form>
   </>
  )
}

export default PayCard

