"use client"

import { 
   Form, 
   FormField,
   FormMessage, 
   FormItem, 
   FormControl,
   FormLabel } from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
 } from "@/components/ui/select"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { BackButton } from "@/components/common/BackButton"

const formSchema = z.object({
   name: z.string({ required_error: "Model wajib diisi" }),
   price: z.number().min(0, { message: "Harga harus diisi" }),
   brand: z.string({
      required_error: "Pilih Brand mobile",
    }),
   isSecond: z.boolean({ required_error: "Pilih Kondisi mobil" }),
   typeID: z.string({ required_error: "Tipe mobil harus dipilih" })
})

const AddForm = () => {

   const form = useForm({
      resolver: zodResolver(formSchema),
      defaultValues: {
         name: "", price: "", brand: "", isSecond: "", typeID: ""
      }
   })

   function onSubmit(values) {
      console.log(values)
    }


  return (
   <>
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-3">
         <FormField 
            control={form.control}
            name="image url"
            render={({ field }) => (
               <FormItem>
                  <FormLabel>Car Image</FormLabel>
                  <FormControl>
                     <Input type="file" accept="image/*" {...field} />
                  </FormControl>
                  <FormMessage />
               </FormItem>
            )}
         />
         <FormField 
            control={form.control}
            name="name"
            render={({ field }) => (
               <FormItem>
                  <FormLabel>Car model</FormLabel>
                  <FormControl>
                     <Input placeholder="Car model..." {...field} />
                  </FormControl>
                  <FormMessage />
               </FormItem>
            )}
         />
         <FormField 
            control={form.control}
            name="price"
            render={({ field }) => (
               <FormItem>
                  <FormLabel>Price (IDR)</FormLabel>
                  <FormControl>
                     <Input type="number" placeholder="IDR ..." {...field} />
                  </FormControl>
                  <FormMessage />
               </FormItem>
            )}
         />
         <FormField
          control={form.control}
          name="brand"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Brand</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select car brand" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="brand-1">brand-1</SelectItem>
                  <SelectItem value="brand-2">brand-2</SelectItem>
                  <SelectItem value="brand-3">brand-3</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="isSecond"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Car condition</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Car condition" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="true">Second</SelectItem>
                  <SelectItem value="false">New</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="typeID"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Car type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Car type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="1">Sedan</SelectItem>
                  <SelectItem value="2">SUV</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="Description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <Textarea 
               placeholder="Description..."
               className="resize-y" />
            </FormItem>
          )}
        />
        <div className="flex gap-3 mt-10">
            <BackButton />
            <Button className="w-fit">Submit</Button>
        </div>
      </form>
      </Form>
   </>
  )
}

export default AddForm