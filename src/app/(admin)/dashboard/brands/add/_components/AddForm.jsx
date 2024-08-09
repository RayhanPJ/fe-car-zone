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

const formSchema = z.object({
  name: z.string({ required_error: "Nama wajib diisi" }),
});

const AddForm = () => {
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  function onSubmit(values) {
    API.post(`/api/cms/brand-cars`, { ...values })
      .then(() => {
        toast({
          title: `Brand added succesfuly`,
          variant: "success",
        });
        router.replace("/dashboard/brands");
      })
      .catch((error) => {
        toast({
          title: `Failed to add brands data`,
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
            <Button className="w-fit">Submit</Button>
          </div>
        </form>
      </Form>
    </>
  );
};

export default AddForm;
