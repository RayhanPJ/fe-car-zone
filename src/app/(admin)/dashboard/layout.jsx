import { Sheet, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import ThemeToggler from "@/components/common/ThemeToggler"
import { Menu , CircleUserRound} from "lucide-react"
import DashboardSideBarMobile from "./_components/DashboardSideBarMobile"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent } from "@radix-ui/react-dropdown-menu"
import DashboardMenu from "./_components/DashboardMenu"


export const metadata = {
  title: "Dashboard - CarZone dashboard"
}


export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <DashboardMenu />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-24 w-fit sm:w-auto">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6 w-full">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="" variant="outline" className="sm:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <DashboardSideBarMobile />
          </Sheet>
          {/* top */}
          <nav className="flex justify-end sm:justify-between items-center gap-4 w-full">
            <h1 className="text-xl font-bold hidden sm:block">Dashboard</h1>

            <div className="flex items-center gap-4">
              <ThemeToggler />

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon" className="overflow-hidden rounded-full">
                    <CircleUserRound />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-background p-3">
                  <DropdownMenuItem>
                    <Button type="button" variant="destructive">
                      Logout
                    </Button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </nav>
        </header>
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 mx-auto max-w-screen-2xl w-full">
          {children}
        </main>
      </div>
    </div>
  )
}
