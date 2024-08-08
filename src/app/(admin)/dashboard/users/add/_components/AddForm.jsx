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
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { BackButton } from "@/components/common/BackButton";
import API from "@/api/index.js";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  username: z.string().min(1, "Username required"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password of at least 6 characters"),
  role_id: z.coerce.number({ required_error: "Role is required" }),
  phone_number: z.string(),
  address: z.string(),
});

const AddForm = () => {
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      role_id: 0,
      phone_number: "",
      address: "",
    },
  });

  async function onSubmit(values) {
    try {
      console.log(values);
      const response = await API.post("/api/cms/users", values);

      if (!response.status === 201) {
        throw new Error("Something went wrong");
      }

      console.log("Success:", response.data);
      router.push("/dashboard/users");
    } catch (error) {
      console.error("Error:", error);
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
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Username..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Email..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Password..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="role_id"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Role</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select user role" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="20202">User</SelectItem>
                    <SelectItem value="10101">Admin</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone_number"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Phone Number..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <Textarea
                  placeholder="Address..."
                  className="resize-y"
                  {...field}
                />
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
