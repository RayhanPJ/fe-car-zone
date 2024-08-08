"use client"
import { cn } from "@/lib/utils"
import { Loader } from "lucide-react"

export const Spinner = ({className}) => {
  return <Loader className={cn("animate-spin size-7 mx-auto", className)} />
 }