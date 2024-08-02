import { Tag, UsersRound, LayoutDashboard, Car, HandCoins } from "lucide-react"
import { CarZoneLogo } from "@/components/icons"
import { SheetContent } from "@/components/ui/sheet"
import Link from "next/link"

const DashboardSideBarMobile = () => {
  return (
<>
   <SheetContent side="left" className="sm:max-w-xs">
      <nav className="grid gap-6 text-lg font-medium">
         <Link
            href="#"
            className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full  text-lg font-semibold text-primary-foreground md:text-base"
            prefetch={false}
         >
            <CarZoneLogo className="h-5 w-5 transition-all group-hover:scale-110" />
            <span className="sr-only">CarZone</span>
         </Link>
         <Link href="#" className="flex items-center gap-4 px-2.5 text-foreground" prefetch={false}>
            <LayoutDashboard className="h-5 w-5" />
            Dashboard
         </Link>
         <Link
            href="#"
            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
            prefetch={false}
         >
            <Tag className="h-5 w-5" />
            Brands
         </Link>
         <Link
            href="#"
            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
            prefetch={false}
         >
            <Car className="h-5 w-5" />
            Cars
         </Link>
         <Link
            href="#"
            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
            prefetch={false}
         >
            <UsersRound className="h-5 w-5" />
            Customers
         </Link>
         <Link
            href="#"
            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
            prefetch={false}
         >
            <HandCoins className="h-5 w-5" />
            Transactions
         </Link>
      </nav>
   </SheetContent>
</>
  )
}

export default DashboardSideBarMobile