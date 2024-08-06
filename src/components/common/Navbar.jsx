"use client";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "../ui/separator";
import { MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import ThemeToggler from "./ThemeToggler";
import { CarZoneLogo } from "../icons";
import { useAuth } from "@/hooks/useAuth";
import { UserNav } from "./UserNav";

export const publicRoute = [
  {
    link: "/",
    content: "home",
  },
  {
    link: "/cars",
    content: "Car collections",
  },
  {
    link: "/about",
    content: "about",
  },
  {
    link: "/contact",
    content: "contact",
  },
];

export const unAuthRoute = [
  {
    link: "/sign-in",
    content: (
      <Link
        href="/sign-in"
        className="capitalize font-medium btn btn-outline w-full"
      >
        sign in
      </Link>
    ),
  },
  {
    link: "/sign-up",
    content: (
      <Link
        href="/sign-up"
        className="capitalize font-medium btn btn-default w-full"
      >
        sign up
      </Link>
    ),
  },
];

export const activeLink = (link, pathname) => {
  return link === "/" && pathname !== "/"
    ? false
    : pathname === link || pathname.startsWith(link + "/");
};

const Navbar = () => {
  const pathname = usePathname();
  const { auth } = useAuth()

  return (
    <nav className="bg-background w-full sticky top-0 z-50">
      <div className="max-w-screen-2xl mx-auto px-5">
        <div className="flex justify-between items-center py-5">
          <Link href={"/"} className="btn">
            <CarZoneLogo className={"size-12 dark:fill-white"} />
          </Link>

          <ul className="hidden xl:flex items-center gap-4">
            {publicRoute.map((item) => (
              <li key={item.link}>
                <Link
                  href={item.link}
                  className={cn(
                    "nav-link",
                    activeLink(item.link, pathname) && "active"
                  )}
                >
                  {item.content}
                </Link>
              </li>
            ))}
            {auth?.role === 'admin' &&
              <li>
              <Link
                  href={"/dashboard"}
                  className={cn(
                    "nav-link",
                    activeLink("/dashboard", pathname) && "active"
                  )}
                >
                dashboard
              </Link>
            </li>
            }
          </ul>

          <ul className="hidden xl:flex items-center gap-3">
            <li>
              <ThemeToggler />
            </li>
            {!auth?.token && unAuthRoute.map((item) => (
                <li key={item.link}>{item.content}</li>
              ))}
            {auth?.token && <li><UserNav /></li> }
          </ul>
          {/* mobile */}
          <div className="flex items-center xl:hidden">
            <ul className="flex item-center gap-3 bg-blue">
              <li>
                <ThemeToggler />
              </li>
              {auth?.token && <li><UserNav /></li> }
            </ul>
            {/* sidebar menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="ml-3">
                  <MenuIcon />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <ul className="flex flex-col justify-center items-center text-center gap-2 my-20 w-full">
                  {publicRoute.map((item) => (
                    <li key={item.link} className="my-4">
                      <Link
                        href={item.link}
                        className={cn(
                          "nav-link",
                          activeLink(item.link, pathname) && "active"
                        )}
                          >
                        {item.content}
                      </Link>
                    </li>
                  ))}
                  {auth?.role === 'admin' &&
                    <li>
                    <Link
                        href={"/dashboard"}
                        className={cn(
                          "nav-link",
                          activeLink("/dashboard", pathname) && "active"
                        )}
                      >
                      dashboard
                    </Link>
                  </li>}
                  

                  <Separator className="my-7" />

                  <div className="w-full flex flex-col gap-2 items-center justify-center">
                    {!auth?.token &&  unAuthRoute.map((item) => (
                      <span key={item.link} className="w-full">
                        {item.content}
                      </span>
                    ))}
                  </div>
                </ul>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
