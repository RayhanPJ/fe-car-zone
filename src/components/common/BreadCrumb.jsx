"use client"
import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbList } from "../ui/breadcrumb";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const BreadCrumb = ({ className, ...props }) => {
  const pathname = usePathname();
  const pathItems = pathname.split("/").filter(path => !Number(path) && path);
  
  const buildPath = (index) => {
    return "/" + pathItems.slice(0, index + 1).join("/");
  };

  return (
    <Breadcrumb className={cn(className)} {...props}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        {pathItems.map((item, i) => {
          const fullPath = buildPath(i);
          const isLast = i === pathItems.length - 1;
          return (
            <React.Fragment key={i}>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink
                  href={fullPath}
                  className={cn(`font-normal capitalize ${isLast && "font-bold"}`)}
                >
                  {item}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadCrumb;
