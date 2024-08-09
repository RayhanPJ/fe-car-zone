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
  name: z.string({ required_error: "Car type name is required" }),
});

const UpdateForm = ({ carTypeID }) => {
  const searchParams = useSearchParams();
  const { toast } = useToast();
  const router = useRouter();
  const [carTypes, setCarTypes] = useState([]);
  const { data, isLoading } = useSWR(
    API_BASE_URL + "/api/cms/type-cars/" + carTypeID,
    fetcher
  );

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  useEffect(() => {
    (async () => {
      try {
        const data = await API.get("/api/cms/type-cars");
        setCarTypes(data);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  useEffect(() => {
    if (data) {
      form.reset({
        name: data.name || "",
      });
    }
  }, [data]);

  function onSubmit(values) {
    let data = { ...values };
    API.put(`/api/cms/type-cars/${carTypeID}`, data)
      .then(() => {
        toast({
          title: `${data?.name} updated successfully`,
          variant: "success",
        });
        router.replace("/dashboard/car-types");
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
        <div className="mb-5">
          <Label htmlFor="name">Car Type Name</Label>
          <Input
            {...form.register("name")}
            disabled={!!searchParams.get("detail")}
            type="text"
            placeholder="Car type name..."
          />
        </div>
        <div className="flex gap-3 mt-10">
          <BackButton />
          {!searchParams.get("detail") ? (
            <Button className="w-fit" type="submit">
              Update
            </Button>
          ) : (
            <Link
              className="btn btn-default"
              href={`/dashboard/car-types/${carTypeID}`}
            >
              Update this car type
            </Link>
          )}
        </div>
      </form>
    </>
  );
};

export default UpdateForm;
