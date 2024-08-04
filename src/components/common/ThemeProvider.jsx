"use client"

import { ThemeProvider as NextTheme } from "next-themes"

export default function ThemeProvider({ children }) {
   return (
      <>
         <NextTheme 
            attribute="class"
            enableSystem
            defaultTheme="system">
            {children}
         </NextTheme>
      </>
   )
}