"use client"
import { fetcher } from "@/api"
import useSWR from "swr"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Skeleton } from "@/components/ui/skeleton"
import { Button } from "@/components/ui/button"

const Profile = () => {
  const { data, isLoading, error } = useSWR("/api/auth/me", fetcher)

  
   if(error) return <div>Failed to fetch profile</div>
   if(isLoading) {
      return <>
         {Array(5).fill(0).map((_, i) => (
            <div key={i} className="flex flex-col gap-3 my-5">
               <Skeleton className={"w-1/2 sm:w-1/4 h-4"} />
               <Skeleton className={"w-full h-8"} />
            </div>
         ))}
      </>
   }
  return (
    <form action="">
      <div className="my-5 flex flex-col gap-3">
         <Label htmlFor="username">Username</Label>
         <Input id="username" defaultValue={data?.data.username} />
      </div>
      <div className="my-5 flex flex-col gap-3">
         <Label htmlFor="email">Email</Label>
         <Input id="email" defaultValue={data?.data.email} />
      </div>
      <div className="my-5 flex flex-col gap-3">
         <Label htmlFor="email">Email</Label>
         <Input id="email" defaultValue={data?.data.email} />
      </div>
      <div className="my-5 flex flex-col gap-3">
         <Label htmlFor="phone_number">Phone number</Label>
         <Input type="tel" id="phone_number" defaultValue={data?.data.phone_number} />
      </div>
      <div className="my-5 flex flex-col gap-3">
         <Label htmlFor="address">Address</Label>
         <Input type="tel" defaultValue={data?.data.address} />
      </div>

      <Button type="submit" className="my-5">Update profile</Button>
    </form>
  )
}

export default Profile