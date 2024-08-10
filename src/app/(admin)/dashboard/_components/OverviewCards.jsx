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
import { Skeleton } from "@nextui-org/react"
import { useEffect, useState } from "react"
import formatCurrency from "@/lib/currencyFormat"

export const IncomeOverview = () => {
   const { data, isLoading, isValidating } = useSWR("/api/cms/orders", fetcher, { refreshInterval: 10000 })
   const [income, setIncome] = useState(0)

   useEffect(() => {
      if(data?.data){
         const total = data.data
         .filter(order => order.status && new Date(order.updated_at) >= new Date(new Date().setDate(new Date().getDate() - 7)))
         .reduce((sum, order) => sum + order.total_price, 0)
         setIncome(total)
         console.log(total)
      }
   }, [data])

   return <>
      <Card>
        <CardHeader className="pb-2">
          <CardDescription>Income last week</CardDescription>
          <CardTitle className="text-4xl">
            {isLoading || isValidating && <Skeleton className="h-9 w-2/4" /> }
            {(!isLoading) && <span>{formatCurrency(income) || 0}</span> }
          </CardTitle>
        </CardHeader>
      </Card>
   </>
}

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
   } = useSWR(API_BASE_URL + '/api/cms/users', fetcher ,{ refreshInterval: 60000 })

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