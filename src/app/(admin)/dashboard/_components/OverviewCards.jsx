'use client'

import { fetcher } from "@/api"
import { 
   Card, 
   CardHeader, 
   CardFooter, 
   CardDescription, 
   CardTitle } from "@/components/ui/card"
import { API_BASE_URL } from "@/constants/variables"
import useSWR from "swr"
import { OverviewCardSkeleton } from "@/components/common/Skeletons"
import Link from "next/link"

export const CarsOverview = () => {
   const { 
      data,
      isLoading,
      isValidating,
      error
   } = useSWR(API_BASE_URL + '/api/cms/cars', fetcher ,{ revalidateOnFocus: true })

   if(isLoading || isValidating) return <OverviewCardSkeleton />
   return <>
      <Card>
         {error 
         ? <div className="grid place-items-center h-full">Failed to fetch data</div>
         : <>
            <CardHeader className="pb-2">
               <CardDescription>Total Cars</CardDescription>
               <CardTitle className="text-4xl">{data?.cars.length} units</CardTitle>
            </CardHeader>
            <CardFooter className="mt-6">
               <Link className="btn btn-outline" href="/dashboard/cars">View Table</Link>
            </CardFooter>
         </>  
         }
      </Card>
   </>
}
export const UsersOverview = () => {
   const { 
      data,
      isLoading,
      isValidating,
      error
   } = useSWR(API_BASE_URL + '/api/cms/users', fetcher ,{ refreshInterval: 10000 })

   if(isLoading || isValidating) return <OverviewCardSkeleton />
   return <>
      <Card>
         {error 
         ? <div className="grid place-items-center h-full">Failed to fetch data</div>
         : <>
            <CardHeader className="pb-2">
               <CardDescription>Total Users</CardDescription>
               <CardTitle className="text-4xl">{data?.data.filter(u => u.role == 'user').length} Users</CardTitle>
            </CardHeader>
            <CardFooter className="mt-6">
               <Link className="btn btn-outline" href="/dashboard/users">View Table</Link>
            </CardFooter>
         </>  
         }
      </Card>
   </>
}
export const BrandsOverview = () => {
   const { 
      data,
      isLoading,
      isValidating,
      error
   } = useSWR(API_BASE_URL + '/api/cms/brand-cars', fetcher ,{ revalidateOnFocus: true })

   if(isLoading || isValidating) return <OverviewCardSkeleton />
   return <>
      <Card>
         {error 
         ? <div className="grid place-items-center h-full">Failed to fetch data</div>
         : <>
            <CardHeader className="pb-2">
               <CardDescription>Total Brand</CardDescription>
               <CardTitle className="text-4xl">{data?.length} Brands</CardTitle>
            </CardHeader>
            <CardFooter className="mt-6">
               <Link className="btn btn-outline" href="/dashboard/users">View Table</Link>
            </CardFooter>
         </>  
         }
      </Card>
   </>
}