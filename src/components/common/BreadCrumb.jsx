"use client"
import React from "react"
import { Breadcrumb, 
         BreadcrumbItem, 
         BreadcrumbLink, 
         BreadcrumbSeparator, 
         BreadcrumbList } from "../ui/breadcrumb"
import { usePathname } from "next/navigation"
import { activeLink } from "./Navbar"
import { cn } from "@/lib/utils"

const BreadCrumb = ({className, ...props}) => {
   const pathname = usePathname()
   const pathItems = pathname.split("/").filter(path => !Number(path) && path)

   return (
      <>
         <Breadcrumb className={cn(className)} {...props}>
            <BreadcrumbList>
               <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
               </BreadcrumbItem>
               <BreadcrumbSeparator />
               {pathItems.map((item,i) => (
                  <React.Fragment key={i}>
                     <BreadcrumbItem >
                        <BreadcrumbLink href={"/"+item} 
                           className={cn(`font-normal capitalize ${activeLink("/"+item, pathname) && "font-bold"}`)}>
                           {item}
                        </BreadcrumbLink>
                     </BreadcrumbItem>
                     {pathItems.length - 1 != i && 
                        <BreadcrumbSeparator />
                     }
                  </React.Fragment>
               ))}
            </BreadcrumbList>
         </Breadcrumb>
      </>
   )
}

export default BreadCrumb