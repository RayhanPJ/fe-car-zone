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
import { useEffect, useState } from "react";
import API from "@/api";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  name: z.string().min(1, { message: "Car Type Name is required" }),
});

const AddForm = () => {
  const { toast } = useToast();
  const router = useRouter();
  const [carTypes, setCarTypes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await API.get("/api/cms/type-cars");
        if (response.data && Array.isArray(response.data)) {
          setCarTypes(response.data);
        } else {
          console.error("Unexpected data format:", response.data);
        }
      } catch (e) {
        console.error("Failed to fetch car types:", e);
      }
    })();
  }, []);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  async function onSubmit(values) {
    setLoading(true);
    try {
      await API.post(`/api/cms/type-cars`, values);
      toast({
        title: `Car type added successfully`,
        variant: "success",
      });
      router.push("/dashboard/car-types");
    } catch (error) {
      toast({
        title: `Failed to add car type`,
        description: error.message || "An error occurred",
        variant: "destructive",
      });
      console.error("Error adding car type:", error);
    } finally {
      setLoading(false);
    }
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
                <FormLabel>Car Type Name</FormLabel>
                <FormControl>
                  <Input placeholder="Car Type..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex gap-3 mt-10">
            <BackButton />
            <Button className="w-fit" type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};

export default AddForm;
