"use client";

import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { BackButton } from "@/components/common/BackButton";
import { useEffect, useState } from "react";
import API, { fetcher } from "@/api";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import useSWR from "swr";
import { API_BASE_URL } from "@/constants/variables";
import { Spinner } from "@/components/common/Spinner";
import useImageUploader from "@/hooks/useImageUploader";
import { UploadIcon } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const formSchema = z.object({
  image_car: z.string({ required_error: "Car image is required" }),
  name: z.string({ required_error: "Model is required" }),
  price: z.coerce.number().min(0, { message: "Price is required" }),
  brand_id: z.coerce
    .number()
    .int()
    .positive({ message: "Select a valid car brand" }),
  is_second: z.preprocess((val) => {
    if (val === "true") return true;
    if (val === "false") return false;
    return val;
  }, z.boolean({ required_error: "Select car condition" })),
  type_id: z.coerce
    .number()
    .int()
    .positive({ message: "Select a valid car type" }),
  description: z.string({ required_error: "Description is required" }),
});

const UpdateForm = ({ carID }) => {
  const searchParams = useSearchParams();
  const { toast } = useToast();
  const router = useRouter();
  const {
    inputFileRef,
    handleFileInputChange,
    progressPercent,
    imgUrl,
    error,
  } = useImageUploader();
  const [brands, setBrands] = useState([]);
  const [carTypes, setCarTypes] = useState([]);
  const { data, isLoading } = useSWR(
    API_BASE_URL + "/api/cms/cars/" + carID,
    fetcher
  );

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
  });

  useEffect(() => {
    (async () => {
      try {
        const brand = await API.get("/api/cms/brand-cars");
        const type = await API.get("/api/cms/type-cars");
        setBrands(brand.data);
        setCarTypes(type.data);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  useEffect(() => {
    if (data) {
      // Reset form with new data
      form.reset({
        image_car: data.car.image_car || "",
        name: data.car.name || "",
        price: data.car.price || 0,
        brand_id: data.car.brand?.id || "",
        is_second: data.car.is_second || false,
        type_id: data.car.type?.ID || "",
        description: data.car.description || "",
      });
    }
  }, [data]);

  function onSubmit(values) {
    let data = { ...values };
    if (values.image_car !== imgUrl) {
      data = { ...values, image_car: imgUrl };
    } else {
      delete data.image_car;
    }
    // console.log(data)
    API.put(`/api/cms/cars/${carID}`, data)
      .then(() => {
        toast({
          title: `${data?.name} updated successfully`,
          variant: "success",
        });
        router.replace("/dashboard/cars");
      })
      .catch((error) => {
        toast({
          title: `Failed to update ${data?.name}`,
          variant: "destructive",
        });
        console.error(error);
      });
  }

  if (isLoading) return <Spinner />;
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
                {!imgUrl && !data?.car.image_car ? (
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
                        src={imgUrl || data?.car.image_car}
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
                  onChange={handleFileInputChange}
                  type="file"
                  accept="image/*"
                  className="sr-only"
                />
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
          <Label>Car Condition</Label>
          <div className="">
            <div className="flex gap-2">
              <input
                disabled={!!searchParams.get("detail")}
                defaultChecked={data?.car.is_second === false}
                id="new"
                value={false}
                type="radio"
                {...form.register("is_second")}
              />
              <label htmlFor="new">New</label>
            </div>
            <div className="flex gap-2">
              <input
                disabled={!!searchParams.get("detail")}
                defaultChecked={data?.car.is_second === true}
                id="second"
                value={true}
                type="radio"
                {...form.register("is_second")}
              />
              <label htmlFor="second">Second</label>
            </div>
          </div>
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
          <Textarea
            {...form.register("description")}
            disabled={!!searchParams.get("detail")}
            placeholder="Description..."
            className="resize-y"
          />
        </div>
        <div className="flex gap-3 mt-10">
          <BackButton />
          {!searchParams.get("detail") ? (
            <Button className="w-fit" type="submit">
              Update
            </Button>
          ) : (
            <Link className="btn btn-default" href={`/dashboard/cars/${carID}`}>
              Update this car
            </Link>
          )}
        </div>
      </form>
    </>
  );
};

export default UpdateForm;
