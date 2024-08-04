// import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css"
import ProgressBarProvider from "@/components/common/ProgressBarProvider";
import ThemeProvider from "@/components/common/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import ScrollTop from "@/components/common/ScrollTop";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });


export const metadata = {
  title: "CarZone - The best car dealer platform",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <ThemeProvider>
          <ProgressBarProvider>
            {children}
            <ScrollTop />
            <Toaster duration={3000} />
          </ProgressBarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
