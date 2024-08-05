import { LayoutDashboard, User, Users,Car, HandCoins } from "lucide-react";

// dashboard navbar
export const navItems = [
   {
     title: 'Dashboard',
     href: '/dashboard',
     icon: <LayoutDashboard />,
     label: 'Dashboard'
   },
   {
     title: 'User',
     href: '/dashboard/user',
     icon: <User />,
     label: 'user'
   },
   {
     title: 'Admin',
     href: '/dashboard/admin',
     icon: <Users />,
     label: 'admin'
   },
   {
     title: 'Car',
     href: '/dashboard/cars',
     icon: <Car />,
     label: 'car'
   },
   {
     title: 'Transactions',
     href: '/dashboard/transactionss',
     icon: <HandCoins />,
     label: 'transactions'
   },
 ];