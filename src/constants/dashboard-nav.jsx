import { LayoutDashboard, Tag, Users,Car, HandCoins, CarFront } from "lucide-react";

// dashboard navbar
export const navItems = [
   {
     title: 'Dashboard',
     href: '/dashboard',
     icon: <LayoutDashboard />,
     label: 'Dashboard'
   },
   {
     title: 'Users',
     href: '/dashboard/users',
     icon: <Users />,
     label: 'users'
   },
   {
     title: 'Cars',
     href: '/dashboard/cars',
     icon: <Car />,
     label: 'cars'
   },
   {
     title: 'Brands',
     href: '/dashboard/brands',
     icon: <Tag />,
     label: 'brand'
   },
   {
     title: 'Car types',
     href: '/dashboard/car-types',
     icon: <CarFront />,
     label: 'car-type'
   },
   {
     title: 'Transactions',
     href: '/dashboard/transactions',
     icon: <HandCoins />,
     label: 'transactions'
   },
 ];