"use client";

import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { BackButton } from "@/components/common/BackButton";
import { useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useRouter, useSearchParams } from "next/navigation";
import useSWR from "swr";
import { API_BASE_URL } from "@/constants/variables";
import { Spinner } from "@/components/common/Spinner";
import Link from "next/link";
import API, { fetcher } from "@/api";

const formSchema = z.object({
  name: z.string().min(1, "Car type name is required"),
});

const UpdateForm = ({ carTypeID }) => {
  const searchParams = useSearchParams();
  const { toast } = useToast();
  const router = useRouter();

  const { data, isLoading, error } = useSWR(
    carTypeID ? `${API_BASE_URL}/api/cms/type-cars/${carTypeID}` : null,
    fetcher
  );

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  useEffect(() => {
    if (data && data.name) {
      form.reset({
        name: data.name,
      });
    }
  }, [data, form]);

  async function onSubmit(values) {
    try {
      await API.put(`/api/cms/type-cars/${carTypeID}`, values);
      toast({
        title: `${values.name} updated successfully`,
        variant: "success",
      });
      router.replace("/dashboard/car-types");
    } catch (error) {
      toast({
        title: `Failed to update ${values.name}`,
        variant: "destructive",
      });
      console.error(error);
    }
  }

  if (isLoading) return <Spinner />;

  if (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading data</div>;
  }

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
            className="mt-3"
          />
        </div>
        <div className="flex gap-3 mt-5">
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
