"use client"
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@radix-ui/react-tooltip"
import { Tag, UsersRound, LayoutDashboard, Car, HandCoins } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { CarZoneLogo } from "@/components/icons"

const dashboardMenu = [
   {
      text: "Dashboard",
      link: "/dashboard",
      icon: <LayoutDashboard className="size-8" />
   },
   {
      text: "Brands",
      link: "/dashboard/brands",
      icon: <Tag className="size-8" />
   },
   {
      text: "Cars",
      link: "/dashboard/cars",
      icon: <Car className="size-8" />
   },
   {
      text: "Customers",
      link: "/dashboard/customers",
      icon: <UsersRound className="size-8" />
   },
   {
      text: "Transactions",
      link: "/dashboard/transactions",
      icon: <HandCoins className="size-8" />
   },
 ]

const DashboardMenu = () => {
   const pathname = usePathname()

   const activeLinkDashboard = (link,pathname) => {
      return link === "/dashboard" && pathname !== "/dashboard"
      ? false
      : pathname === link || pathname.startsWith(link + '/');
    }

  return (
   <>
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-24 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
            <CarZoneLogo className={"w-20 dark:fill-white"} />
            <TooltipProvider className="mt-10 flex flex-col gap-4">
               {dashboardMenu.map(item => (
                  <Tooltip key={item.link}>
                  <TooltipTrigger asChild>
                     <Link
                        href={item.link}
                        className={cn(`flex items-center justify-center rounded-lg transition-colors p-2  ${activeLinkDashboard(item.link, pathname) ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground hover:bg-primary/30"}`)}
                        prefetch={false}
                     >
                        {item.icon}
                        <span className="sr-only">{item.text}</span>
                     </Link>
                  </TooltipTrigger>
                  <TooltipContent side="right">
                     <span className={`p-2 rounded ml-2 ${activeLinkDashboard(item.link, pathname) ? "bg-primary text-primary-foreground" : "bg-accent shadow-md text-accent-foreground"}`}>{item.text}</span>
                  </TooltipContent>
                  </Tooltip>
               ))}
            </TooltipProvider>
        </nav>
      </aside>
   </>
  )
}

export default DashboardMenu