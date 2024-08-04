
import SignUpForm from "./_components/SignUpForm"
import Image from "next/image"
import ThemeToggler from "@/components/common/ThemeToggler"

export const metadata = {
  title: "Sign Up - Carzone"
}

export default function SignInPage() {
  return (
    <div className="grid min-h-screen w-full grid-cols-1 lg:grid-cols-2">
      <ThemeToggler className="fixed top-5 right-5" />
      <div className="relative hidden lg:block">
        <figure className="w-full h-full"> 
          <Image 
            className="w-full h-full object-cover"
            src={"/static/cars.webp"}
            width={650}
            priority
            height={700} />
        </figure>
      </div>
      <div className="flex items-center justify-center p-6 sm:p-12 lg:p-16">
        <SignUpForm />
      </div>
    </div>
  )
}