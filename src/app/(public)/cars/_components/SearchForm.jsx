"use client"

import { Card } from "@/components/ui/card"
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

const SearchForm = () => {
  return (
<>
<Card className="shadow absolute -bottom-2/4 md:-bottom-1/4 w-full py-10 px-5">
   <form action="" className="flex flex-col md:flex-row items-end gap-3">
      <div className="grid w-full items-center gap-1.5">
         <Label htmlFor="car" className="mb-2">Keyword</Label>
         <Input type="search" id="car" placeholder="keyword..." />
      </div>
      <div className="grid w-full items-center gap-1.5">
         <Label htmlFor="brand" className="mb-2">Brand</Label>
         <Select>
            <SelectTrigger className="">
            <SelectValue placeholder="Select Brand" />
            </SelectTrigger>
            <SelectContent>
            <SelectGroup>
               <SelectLabel>Car Brand</SelectLabel>
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
         >Search</Button>
   </form>
</Card>
</>
  )
}

export default SearchForm