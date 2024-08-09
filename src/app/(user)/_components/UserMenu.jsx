"use client"

import { activeLink } from "@/components/common/Navbar"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { BackButton } from "@/components/common/BackButton"

const links = [
   {
      href: "/profile",
      text: "profile"
   },
   {
      href: "/change-password",
      text: "change password"
   },
   {
      href: "/order-list",
      text: "order list"
   },
]

const UserMenu = () => {
   const pathname = usePathname()

  return (
    <>
    <ul className="gap-2 flex flex-col text-base font-medium">
      {links.map(item => (
         <Link href={item.href}>
            <li className={cn(`p-2 rounded-md dark:hover:text-secondary-content dark:hover:bg-secondary/75 hover:bg-slate-100`, 
               activeLink(item.href, pathname) && "bg-slate-100 hover:bg-slate-200 dark:bg-secondary")}>
               {item.text}
            </li>
         </Link>
      ))} 
         <li className="mt-10">
            <BackButton />
         </li>
      </ul>
    </>
  )
}

export default UserMenu