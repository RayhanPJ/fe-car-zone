"use client"
import { cn } from "@/lib/utils"

const GridContainer = ({ className,children, ...props }) => {
  return (
    <div className={cn(`grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 ${className}`)} {...props}>
      {children}
    </div>
  )
}

export default GridContainer