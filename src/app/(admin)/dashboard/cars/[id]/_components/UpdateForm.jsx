"use client"

import { Label } from "@/components/ui/label"
import { useForm } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { BackButton } from "@/components/common/BackButton"
import { useEffect, useState } from "react"
import API, { fetcher } from "@/api"
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import useSWR from "swr"
import { API_BASE_URL } from "@/constants/variables"
import { Spinner } from "@/components/common/Spinner"
import useImageUploader from "@/hooks/useImageUploader"
import { UploadIcon } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import TextEditor from "@/components/common/TextEditor"

const formSchema = z.object({
  image_car: z.string({ required_error: "Car image is required" }),
  name: z.string({ required_error: "Model is required" }),
  price: z.coerce.number().min(0, { message: "Price is required" }),
  brand_id: z.coerce.number().int().positive({ message: "Select a valid car brand" }),
  is_second: z.preprocess(
    (val) => (val === "true" ? true : val === "false" ? false : val),
    z.boolean({ required_error: "Select car condition" })
  ),
  type_id: z.coerce.number().int().positive({ message: "Select a valid car type" }),
  description: z.string().nonempty({ message: "Description is required" })
})


const UpdateForm = ({ carID }) => {
  const searchParams = useSearchParams()
  const { toast } = useToast()
  const router = useRouter()
  const {
    inputFileRef,
    handleFileInputChange,
    progressPercent,
    imgUrl,
    error,
  } = useImageUploader()
  const [brands, setBrands] = useState([])
  const [carTypes, setCarTypes] = useState([])
  const { data : carData, isLoading } = useSWR(
    API_BASE_URL + "/api/cms/cars/" + carID,
    fetcher
  )

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      image_car: "",
      name: "",
      price: 0,
      brand_id: "",
      is_second: false,
      type_id: "",
      description: "",
    },
  })

  useEffect(() => {
    (async () => {
      try {
        const brand = await API.get("/api/cms/brand-cars")
        const type = await API.get("/api/cms/type-cars")
        setBrands(brand.data)
        setCarTypes(type.data)
      } catch (e) {
        console.error(e)
      }
    })()
  }, [])

  useEffect(() => {
    if (carData) {
      // Reset form with new carData
      form.reset({
        image_car: carData.car.image_car || "",
        name: carData.car.name || "",
        price: carData.car.price || '',
        brand_id: carData.car.brand?.id || "",
        is_second: carData.car.is_second ? "true" : "false",
        type_id: carData.car.type?.ID || "",
        description: carData.car.description || "",
      })
      form.setValue("description", carData.car.description || "")
    }
  }, [carData])

  function onSubmit(values) {
    let data = { ...values }
    if(imgUrl){
      if (values.image_car !== imgUrl) {
        data = { ...values, image_car: imgUrl }
      }
    } else {
      data = { ...values, image_car: carData?.car.image_car }
    }
    API.put(`/api/cms/cars/${carID}`, data)
      .then(() => {
        toast({
          title: `${carData?.name} updated successfully`,
          variant: "success",
        })
        router.replace("/dashboard/cars")
      })
      .catch((error) => {
        toast({
          title: `Failed to update ${carData?.name}`,
          variant: "destructive",
        })
        console.error(error)
      })
  }

  if (isLoading) return <Spinner />
  if(carData.car.sold && !searchParams.get("detail")){
    router.replace("/dashboard/cars")
  }
  return (
    <>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-3"
      >
        <input
          type="text"
          className="sr-only"
          {...form.register("image_car")}
        />
        <div className="mb-5">
          <label htmlFor="car_image" className="mt-4 grid gap-4 cursor-pointer">
            <div className="flex py-10 items-center justify-center rounded-md border-2 border-dashed border-muted transition-colors hover:border-primary">
              <div className="text-center">
                {!imgUrl && !carData?.car.image_car ? (
                  <>
                    <UploadIcon className="mx-auto h-12 w-12 text-muted-foreground" />
                    <div className="mt-4 font-medium text-muted-foreground">
                      Click to select car image
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-full max-w-xl h-full max-h-max">
                      <img
                        src={imgUrl || carData?.car.image_car}
                        width={300}
                        height={500}
                      />
                      <div className="mt-4 font-medium text-muted-foreground">
                        Click to change
                      </div>
                    </div>
                  </>
                )}
                {progressPercent > 0 && progressPercent !== 100 && (
                  <Progress value={progressPercent} />
                )}
                <Input
                  id="car_image"
                  ref={inputFileRef} 
                  disabled={!!searchParams.get("detail")} 
                  onChange={handleFileInputChange} 
                  type="file" accept="image/*" className="sr-only" />
              </div>
            </div>
          </label>
        </div>
        <div className="mb-5">
          <Label htmlFor="name">Car model</Label>
          <Input
            {...form.register("name")}
            disabled={!!searchParams.get("detail")}
            type="text"
            placeholder="Car model..."
          />
        </div>
        <div className="mb-5">
          <Label htmlFor="price">Price</Label>
          <Input
            {...form.register("price")}
            disabled={!!searchParams.get("detail")}
            type="text"
            placeholder="Car price.."
          />
        </div>
        <div className="mb-5">
          <Label htmlFor="brand">Brand</Label>
          <select
            {...form.register("brand_id")}
            disabled={!!searchParams.get("detail")}
            id="brand"
            className="w-full input"
          >
            <option value="" disabled>
              Select car brand
            </option>
            {brands.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name} - {item.id}
              </option>
            ))}
          </select>
         </div>
         <div className="mb-5">
          <Label htmlFor="is_second">Car Condition</Label>
          <select
            id="is_second"
            {...form.register("is_second")}
            disabled={!!searchParams.get("detail")}
            className="w-full input"
          >
            <option value="">Select car condition</option>
            <option value="false">New</option>
            <option value="true">Second</option>
          </select>
        </div>
        <div className="mb-5">
          <Label htmlFor="car_type">Car type</Label>
          <select
            {...form.register("type_id")}
            id="car_type"
            className="w-full input"
            disabled={!!searchParams.get("detail")}
          >
            <option value="" disabled>
              Select car type
            </option>
            {carTypes.map((item) => (
              <option key={item.ID} value={item.ID}>
                {item.name} - {item.ID}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-5">
          <Label>Description</Label>
          <TextEditor 

             value={form.watch("description")}
             onChange={(content) => form.setValue("description", content)}
             disabled={!!searchParams.get("detail")}
             placeholder="Description..."
             className="resize-y" />
          {/* <Textarea
            {...form.register("description")}
            disabled={!!searchParams.get("detail")}
            placeholder="Description..."
            className="resize-y"
          /> */}
        </div>
          <div className="flex gap-3 mt-10">
            <BackButton />
            {!searchParams.get("detail") ?
              <Button className="w-fit" type="submit">Update</Button>
              : !carData?.car.sold 
                ? <Link className="btn btn-default" href={`/dashboard/cars/${carID}`}>Update this car</Link> : null
            }
          </div>
      </form>
    </>
  )
}

export default UpdateForm
