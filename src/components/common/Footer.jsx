
"use client"
import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"
import { cn } from "@/lib/utils"
import { publicRoute, activeLink } from "./Navbar"
import { usePathname } from "next/navigation"
import { CarZoneLogo } from "../icons"

export default function Footer() {

  const pathname = usePathname()

  return (
    <footer className="bg-background border-t pt-12 pb-5 md:py-16 lg:pt-20 mt-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Link href={'/'} className='btn'>
              <CarZoneLogo className={"size-12 dark:fill-white"} />
              <span className="text-xl ml-2 capitalize font-bold">CarZone</span>
            </Link>
          </div>
          <p className="text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, quasi?
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-2">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-1 flex flex-col">
              {publicRoute.map(item => (
                <li key={item.link}>
                  <Link href={item.link} className={cn('nav-link', activeLink(item.link, pathname) && "active" )}>
                    {item.content}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="space-y-2">
          <h4 className="text-lg font-semibold">Follow Us</h4>
          <div className="flex space-x-4 ">
            <Link className="hover:underline" href="#">
              <Facebook className="h-6 w-6" />
            </Link>
            <Link className="hover:underline" href="#">
              <Instagram className="h-6 w-6" />
            </Link>
            <Link className="hover:underline" href="#">
              <Twitter className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-8 md:mt-12 text-center text-gray-400 text-sm">© {new Date().getFullYear()} CarZone. All rights reserved.</div>
    </footer>
  )
}
