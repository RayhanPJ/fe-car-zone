import { Card, CardContent, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import GridContainer from "@/components/common/GridContainer"
import { SUVIcon } from "@/components/icons"
import { Tag } from "lucide-react"
import Link from "next/link"

import SearchForm from "./_components/SearchForm"
import HeaderArticle from "./_components/HeaderArticle"


export const metadata = {
   title: "Car Collections - Carzone best car dealer website"
}

const CarsPage = () => {
  return (
   <>
   <div className="bg-secondary relative before:content-[''] before:absolute before:h-3/4 md:before:h-2/4 md:before:w-[50vw] before:rounded-t-[100px] md:before:rounded-t-[unset] before:w-screen md:before:rounded-tl-[100px] before:bg-primary/90 before:bottom-0 before:right-0">
      <div className="min-h-52 main-container relative">
         <HeaderArticle />
         <SearchForm />
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
            <CardFooter className="space-x-2">
               <Button className="capitalize w-full">
                  Beli sekarang
               </Button>
               <Link 
                  className="btn btn-outline"
                  href={`/cars/${i}`}>
                  Detail
               </Link>
            </CardFooter>
         </Card>
      ))}
   </GridContainer>
   </>
  )
}

export default CarsPage