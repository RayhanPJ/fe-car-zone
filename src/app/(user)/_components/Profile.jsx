"use client"
import { fetcher } from "@/api"
import useSWR from "swr"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Skeleton } from "@/components/ui/skeleton"

const Profile = () => {
  const { data, isLoading, error } = useSWR("/api/auth/me", fetcher)

  
   if(error) return <div>Failed to fetch profile</div>
   if(isLoading) {
      return <>
         {Array(2).fill(0).map((_, i) => (
            <div key={i} className="flex flex-col gap-3">
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
    </form>
  )
}

export default Profile