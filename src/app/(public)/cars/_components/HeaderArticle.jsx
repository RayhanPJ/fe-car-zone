"use client"

import Image from "next/image"

const HeaderArticle = () => {
  return (
   <>
      <header className="flex flex-col-reverse md:flex-row justify-between py-10 items-center">
         <article className="w-full text-primary-foreground md:text-accent-foreground">
            <h1 className="w-full md:w-[90%] text-4xl font-bold capitalize text-center md:text-left">Buy the best car, here!</h1>
            <p className="text-base mt-3 w-full md:w-3/4 text-center md:text-left">Welcome to CarZone. We provide the best cars for you. Choose and buy only at CarZone.</p>
         </article>
         <div className="w-full">
            <Image 
               src={"/static/mercy-car.png"}
               width={500}
               height={500}
               priority
               className="mx-auto"
               alt="mercedez benz car"
               />
         </div>
      </header>
   </>
  )
}

export default HeaderArticle