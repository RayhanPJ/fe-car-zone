'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { useAuth } from '@/hooks/useAuth';
import Link from 'next/link';
import { LogOut } from 'lucide-react';
import { signOut } from "@/lib/auth";
import { signOutCookie } from '@/lib/server';
import { useLayoutEffect } from 'react';
import { isTokenExpired } from '@/lib/token';


export function UserNav() {
   const { auth, clear } = useAuth()

   useLayoutEffect(() => {
      if(auth?.token){
         if(isTokenExpired(auth.token)){
            clear()
         }
      }
   }, [])


   return (
   <DropdownMenu>
      <DropdownMenuTrigger asChild>
         <Button variant="ghost" className="relative size-10 rounded-full">
         <Avatar className="size-10">
            <AvatarImage
               src={''}
               alt={auth?.username ?? ''}
            />
            <AvatarFallback className="uppercase">{auth?.username?.[0]}</AvatarFallback>
         </Avatar>
         </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
         <DropdownMenuLabel className="font-normal">
         <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
               {auth?.name}
            </p>
            <p className="text-xs leading-none text-muted-foreground">
               {auth?.email}
            </p>
         </div>
         </DropdownMenuLabel>
         <DropdownMenuSeparator />
         <DropdownMenuGroup>
         <DropdownMenuItem>
            <Link href={"/profile"} className='cursor-pointer w-full'>Profile</Link>
         </DropdownMenuItem>
         </DropdownMenuGroup>
         <DropdownMenuSeparator />
         <DropdownMenuItem className="cursor-pointer" onClick={() => {
            signOutCookie()
            setTimeout(() => signOut(), 500)
         }}>
            <span className='text-destructive flex items-center gap-3'><LogOut className='size-4' /> Log out</span>
         </DropdownMenuItem>
      </DropdownMenuContent>
   </DropdownMenu>
   );
}