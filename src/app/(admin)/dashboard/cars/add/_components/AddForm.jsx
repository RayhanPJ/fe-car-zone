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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { BackButton } from "@/components/common/BackButton"
import { useEffect, useState } from "react"
import { UploadIcon } from "lucide-react"
import useImageUploader from "@/hooks/useImageUploader"
import API from "@/api"
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"

const formSchema = z.object({
   image_car: z.string({ required_error: "Model is required" }),
   name: z.string({ required_error: "Model is required" }),
   price: z.coerce.number().min(0, { message: "Price is required" }),
   brand_id: z.coerce.number(),
   is_second: z.preprocess(
    (val) => {
      if (val === "true") return true;
      if (val === "false") return false;
      return val;
    },
    z.boolean({ required_error: "Select car condition" })
  ),
   type_id: z.coerce.number({ required_error: "Select car type" }),
   description: z.string({ required_error: "description is required" })
})

const UpdateForm = () => {
  const { toast } = useToast()
  const router = useRouter()
  const [brands, setBrands] = useState([])
  const [carTypes, setCarTypes] = useState([])
  const { inputFileRef, handleFileInputChange, progressPercent, imgUrl, error } = useImageUploader()

  useEffect(() => {
    (async() => {
      try{
        const brand = await API.get("/api/cms/brand-cars")
        const type = await API.get("/api/cms/type-cars")
        
        setBrands(brand.data)
        setCarTypes(type.data)
      }catch(e) {
        console.error(e)
      }
    })()
  },[])

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues : {
      image_car: '',
      name: '',
      price: '',
      brand_id: '',
      is_second: '',
      type_id: '',
      description: ''
    }
  })

   function onSubmit(values) {
    API.post(`/api/cms/cars`, {...values, image_car: imgUrl})
    .then(() => {
      toast({
        title: `Car added succesfuly`,
        variant: "success"
      })
      router.replace("/dashboard/cars")
    })
    .catch((error) => {
      toast({
        title: `Failed to add car data`,
        variant: "destructive"
      })
      console.error(error)
    })
    } 

  return (
   <>
      <Form {...form}>
      <label htmlFor="car_image" className="mt-4 grid gap-4 cursor-pointer">
          <div className="flex py-10 items-center justify-center rounded-md border-2 border-dashed border-muted transition-colors hover:border-primary">
            <div className="text-center">
            {(!imgUrl) 
                ?<>
                  <UploadIcon className="mx-auto h-12 w-12 text-muted-foreground" />
                  <div className="mt-4 font-medium text-muted-foreground">Click to select car image</div>
                </>
                : <>
                  <div className="w-full max-w-xl h-full max-h-max">
                      <img src={imgUrl} width={300} height={500} />
                      <div className="mt-4 font-medium text-muted-foreground">Click to change</div>
                  </div>
                </>
            }
            {(progressPercent > 0 && progressPercent != 100) && <Progress  value={progressPercent}/> }
            <Input required 
                id="car_image"
                ref={inputFileRef} 
                onChange={handleFileInputChange} 
                type="file" accept="image/*" className="sr-only" />
            </div>
          </div>
      </label>
      {imgUrl &&  <Link href={imgUrl} target="_blank" className="my-5">View image</Link> }
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-3">
         <FormField 
            control={form.control}
            name="name"
            render={({ field }) => (
               <FormItem>
                  <FormLabel>Car model</FormLabel>
                  <FormControl>
                     <Input required placeholder="Car model..." {...field} />
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
                     <Input required type="number" placeholder="IDR ..." {...field} />
                  </FormControl>
                  <FormMessage />
               </FormItem>
            )}
         />
         <FormField
          control={form.control}
          name="brand_id"
          render={({ field }) => (
            <FormItem>
              <label htmlFor="brand">Brand</label>
                <select required id="brand" className="w-full input" {...field}>
                  <option value="" disabled>
                    Select car brand
                  </option>
                  {brands.map(item => (
                    <option key={item.id} value={item.id}>
                      {item.name} - {item.id}
                    </option>
                  ))}
                </select>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="is_second"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Car condition</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex gap-3 my-4"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="true" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Second
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="false" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      New
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="type_id"
          render={({ field }) => (
            <FormItem>
              <label htmlFor="car_type">Car type</label>
                <select required id="car_type" className="w-full input" {...field}>
                  <option value="" disabled>
                    Select car type
                  </option>
                  {carTypes.map(item => (
                    <option key={item.ID} value={item.ID}>
                      {item.name} - {item.ID}
                    </option>
                  ))}
                </select>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <Textarea 
                required
               placeholder="Description..."
               className="resize-y" {...field} />
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

export default UpdateForm
