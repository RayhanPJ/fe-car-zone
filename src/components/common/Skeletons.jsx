"use client"

import { cn } from "@/lib/utils"
import { Skeleton } from "../ui/skeleton"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";


export const CarCardSkeleton = ({ className, ...props }) => (
   <Card className={cn(`rounded overflow-hidden p-4`)} {...props}>
         <Skeleton className="h-48 w-full mb-4" />
         <Skeleton className="h-6 w-3/4 mb-2" />
         <Skeleton className="h-6 w-1/4 mb-4" />
      <div className="flex items-center justify-between mb-4">
         <Skeleton className="h-4 w-1/6" />
         <Skeleton className="h-4 w-1/6" />
      </div>
      <div className="flex items-center justify-between">
         <Skeleton className="h-10 w-1/2 mr-2" />
         <Skeleton className="h-10 w-1/3" />
      </div>
   </Card>
)

export const OverviewCardSkeleton = ({className, ...props}) => {
   return (
     <Card className={cn(`rounded overflow-hidden p-4`)} {...props}>
       <CardHeader>
         <CardTitle className="text-sm">
           <Skeleton className="h-4 w-24" />
         </CardTitle>
       </CardHeader>
       <CardContent className="flex flex-col items-start">
         <Skeleton className="h-8 w-24" />
       </CardContent>
       <CardFooter className="flex justify-start">
         <Skeleton className="h-10 w-24" />
       </CardFooter>
     </Card>
   );
 }