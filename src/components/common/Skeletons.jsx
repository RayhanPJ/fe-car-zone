"use client"

import { cn } from "@/lib/utils"
import { Skeleton } from "../ui/skeleton"


export const CarCardSkeleton = ({ className, ...props }) => (
   <div className={cn(`max-w-sm rounded overflow-hidden shadow-lg p-4`)} {...props}>
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
   </div>
)