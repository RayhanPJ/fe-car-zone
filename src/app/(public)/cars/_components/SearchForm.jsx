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
import { Button } from "@/components/ui/button"
import { useSearchParams } from "next/navigation"
import { useForm } from "react-hook-form"
import { useCallback } from "react"
import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation"
import { Form, FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form"

const SearchForm = () => {
   const searchParams = useSearchParams()
   const router = useRouter()
   const pathname = usePathname()
   const form = useForm({
      defaultValues : { keyword: '', brand: '' },
   })

   const createQueryString = useCallback(
      (name, value) => {
        const params = new URLSearchParams(searchParams.toString())
        params.set(name, value)
   
        return params.toString()
      },
      [searchParams]
    )

   const onSubmit = (d) => {
      router.push(`${pathname}?${createQueryString("keyword", d.keyword)}`, { scroll: false })
   }

  return (
<>
<Card className="shadow absolute -bottom-2/4 md:-bottom-1/4 w-full py-10 px-5 left-2/4 -translate-x-2/4 max-w-4xl">
   <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}  className="flex flex-col md:flex-row items-end gap-3">
         <FormField 
            control={form.control}
            name="keyword"
            render={({field}) => (
               <FormItem className="grid w-full items-center gap-1.5">
                  <FormLabel className="mb-2">Search car</FormLabel>
                  <Input type="search" placeholder="Keyword..." {...field} />
               </FormItem>
            )} />
         {searchParams.get("keyword") && 
            <Button 
               onClick={() => {
                  router.push(`${pathname}?${createQueryString("keyword", "")}`, { scroll: false })
                  form.reset()
               }} 
               type="reset" 
               variant="destructive">
               Clear
            </Button>
         }
         <Button type="submit" 
            className="w-full md:w-auto"
            >Search</Button>
      </form>
   </Form>
</Card>
</>
  )
}

export default SearchForm