"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import API from "@/api";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
   old_password: z.string({ required_error: "Old password is required" }),
   new_password: z.string({ required_error: "New password is required" })
      .min(5, { message: "Password length minimum is 5 characters"})
})

const ChangePassForm = () => {

   const form = useForm({ 
      resolver: zodResolver(schema),
      defaultValues: {
         old_password: '', new_password: ''
      }
   })

   const onSubmit = (values) => {
      console.log(values)
   }

  return (
   <>
      <form onSubmit={form.handleSubmit(onSubmit)}>
          <label className="form-control w-full max-w-2xl">
            <div className="label-text font-semibold mb-2">Old Password</div>
            <Input
              {...form.register("old_password")}
              type="password"
              placeholder="Enter old password"
              className="input input-bordered input-md w-full max-w-sm"
              />
            <p className="text-xs text-slate-500 mt-2">
              Enter your current password to verify your identity.
            </p>
          </label>
          <br />
          <label className="form-control w-full max-w-2xl my-5">
            <div className="label-text font-semibold mb-2">New Password</div>
            <Input
              {...form.register("new_password")}
              type="password"
              placeholder="Enter new password"
              className="input input-bordered input-md w-full max-w-sm"
            />
            <p className="text-xs text-slate-500 mt-2">
              Choose a new password that you haven't used before. Make sure it
              is strong and secure.
            </p>
            <p className="text-destructive">Lorem, ipsum dolor.</p>
          </label>

          <Button className="btn mt-5" type="submit">
            Submit
          </Button>
        </form>
   </>
  )
}

export default ChangePassForm