"use client";

import {
  Form,
  FormField,
  FormMessage,
  FormItem,
  FormControl,
  FormLabel,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { BackButton } from "@/components/common/BackButton";
import { useToast } from "@/components/ui/use-toast";
import API from "@/api";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const formSchema = z.object({
  name: z.string({ required_error: "Nama wajib diisi" }),
});

const UpdateForm = ({ brandId }) => {
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  useEffect(() => {
    if (brandId) {
      API.get(`/api/cms/brand-cars/${brandId}`)
        .then(({ data }) => {
          form.reset(data); // Set default values with the brand data
        })
        .catch((error) => {
          toast({
            title: `Failed to fetch brand data`,
            variant: "destructive",
          });
          console.error(error);
        });
    }
  }, [brandId]);

  function onSubmit(values) {
    API.put(`/api/cms/brand-cars/${brandId}`, { ...values })
      .then(() => {
        toast({
          title: `Brand updated successfully`,
          variant: "success",
        });
        router.replace("/dashboard/brands");
      })
      .catch((error) => {
        toast({
          title: `Failed to update brand data`,
          variant: "destructive",
        });
        console.error(error);
      });
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-3"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Brand model</FormLabel>
                <FormControl>
                  <Input placeholder="Brand model..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex gap-3 mt-10">
            <BackButton />
            <Button className="w-fit" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};

export default UpdateForm;
