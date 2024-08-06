"use client"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"
import { signUp } from "../actions"
import { signUpSchema } from "../schema"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormField, FormMessage, FormItem, FormLabel, FormControl, FormDescription } from "@/components/ui/form"
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"

const SignUpForm = () => {
  const router = useRouter()
  const { toast } = useToast()
  const [serverError, setServerError] = useState({})
  const form = useForm({
    mode: "onChange",
    resolver: zodResolver(signUpSchema),
    defaultValues: {username: '', email:'', password: '', confirmPassword: ''},
  })


  const onSubmit = (data) => {
    (async () => {
      setServerError({})
      const result = await signUp(data)
      if (!result.success) {
        console.log(result.server)
        if (result.server){
          setServerError({server: result.errors})
        }else{
          const errors = result.errors.reduce((acc, error) => {
            acc[error.path[0]] = error.message
            return acc
          })
          setServerError(errors)
        }
      }else{
        toast({
          variant: "success",
          title: "Register success",
          description: "You can sign in to access your account",
        })
        setTimeout(() => {
          router.replace("/sign-in")
        }, 3000)
      }
    })()
  }

  return (
   <>
      <div className="w-full max-w-md space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Sign Up</h1>
            <p className="text-gray-500 dark:text-gray-400">Sign Up to get started</p>
          </div>

          {serverError?.server &&
            <div className="py-3 bg-destructive px-4 text-destructive-foreground rounded-md">
              <p>{serverError.server}</p>
            </div>
          }

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input placeholder="..." {...field} />
                      </FormControl>
                      <FormDescription>Min 5  characters</FormDescription>
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
                        <Input type="email" placeholder="..." {...field} />
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
                        <Input type="password" placeholder="..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              <Button className="w-full mt-4" type="submit">Sign Up</Button>
            </form>
          </Form>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-2 text-gray-500 dark:bg-gray-950 dark:text-gray-400">Already have an account?</span>
          </div>
          <Link href={"/sign-in"} className="btn btn-secondary w-full">Sign In</Link>
        </div>
   </>
  )
}
export default SignUpForm