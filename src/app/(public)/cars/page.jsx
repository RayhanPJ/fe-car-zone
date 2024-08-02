import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
   Select,
   SelectContent,
   SelectGroup,
   SelectItem,
   SelectLabel,
   SelectTrigger,
   SelectValue,
 } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import GridContainer from "@/components/common/GridContainer"
import { SUVIcon } from "@/components/icons"
import { Tag } from "lucide-react"


export const metadata = {
   title: "Car Collections - Carzone best car dealer website"
}

const CarsPage = () => {
  return (
   <>
   <div className="bg-secondary relative before:content-[''] before:absolute before:h-3/4 md:before:h-2/4 md:before:w-[50vw] before:rounded-t-[100px] md:before:rounded-t-[unset] before:w-screen md:before:rounded-tl-[100px] before:bg-primary/90 before:bottom-0 before:right-0">
      <div className="min-h-52 main-container relative">
         <header className="flex flex-col-reverse md:flex-row justify-between py-10 items-center">
            <article className="w-full text-primary-foreground md:text-accent-foreground">
               <h1 className="w-full md:w-[90%] text-4xl font-bold capitalize text-center md:text-left">Beli & dapatkan Mobil Terbaik hanya dari kami</h1>
               <p className="text-base mt-3 w-full md:w-3/4 text-center md:text-left">Selamat datang di CarZone. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Siap memberikan layanan terbaik untuk anda.</p>
            </article>
            <div className="w-full">
               <Image 
                  src={"/static/mercy-car.png"}
                  width={500}
                  height={500}
                  className="mx-auto"
                  alt="mercedez benz car"
                  />
            </div>
         </header>

         <Card className="shadow absolute -bottom-2/4 md:-bottom-1/4 w-full py-10 px-5">
            <form action="" className="flex flex-col md:flex-row items-end gap-3">
               <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="car" className="mb-2">Keyword</Label>
                  <Input type="search" id="car" placeholder="Masukkan keyword..." />
               </div>
               <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="brand" className="mb-2">Brand</Label>
                  <Select>
                     <SelectTrigger className="">
                     <SelectValue placeholder="Select Brand" />
                     </SelectTrigger>
                     <SelectContent>
                     <SelectGroup>
                        <SelectLabel>Brand mobil</SelectLabel>
                        <SelectItem value="sad" >Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="blueberry">Blueberry</SelectItem>
                        <SelectItem value="grapes">Grapes</SelectItem>
                        <SelectItem value="pineapple">Pineapple</SelectItem>
                     </SelectGroup>
                     </SelectContent>
                  </Select>
               </div>
               <Button type="submit" 
                  className="w-full md:w-auto"
                  >Cari</Button>
            </form>
         </Card>
      </div>

   </div>


      <GridContainer className={"my-10 mt-[300px] md:mt-[150px] main-container"}>
         {Array(8).fill(0).map((_, i) => (
            <Card key={i} className="shadow-md">
               <Image 
                  src={"https://imgd.aeplcdn.com/370x208/n/cw/ec/130591/fronx-exterior-right-front-three-quarter-109.jpeg"}
                  width={300}
                  height={300}
                  />
               <CardContent className="mt-5">
                  <CardTitle className="text-lg md:text-xl">Lorem, ipsum dolor.</CardTitle>
                  <p className="my-2 text-sm md:text-lg">IDR. 120.000.000</p>
                  <div className="flex flex-col md:flex-row items-start my-3 md:items-center justify-between">
                     <span className="flex items-center gap-2 font-bold"><SUVIcon className={"size-7"} /> SUV </span>
                     <span className="flex items-center gap-2 font-bold"><Tag className="size-5" /> Suzuki </span>
                  </div>
               </CardContent>
               <CardFooter>
                  <Button className="capitalize w-full">
                     Beli sekarang
                  </Button>
               </CardFooter>
            </Card>
         ))}
      </GridContainer>
   </>
  )
}

export default CarsPage