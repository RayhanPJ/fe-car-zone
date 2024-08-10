"use client"

import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import useSearchInput from "@/hooks/useSearchInput"
import { Search } from "lucide-react"

const SearchForm = () => {
   const { inputRef, handleInputChange} = useSearchInput("keyword")

  return (
<>
<Card className="shadow-xl absolute rounded-full w-full sm:w-3/4 -bottom-5 md:bottom-0 -translate-x-2/4 left-2/4 translate-y-2/4 border border-primary">
   <form className="relative flex items-center justify-between">
      <Input
         ref={inputRef}
         onChange={handleInputChange} 
         placeholder="Search cars..."
         className="px-5 py-10 rounded-full text-lg" 
         autoFocus
         type="search" />
      <Button className="rounded-full absolute right-5 py-7">
         <Search />
      </Button>
   </form>
</Card>
</>
  )
}

export default SearchForm