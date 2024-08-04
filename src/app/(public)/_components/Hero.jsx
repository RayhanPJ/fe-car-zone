import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-6">
      <div className="flex flex-col justify-center w-full lg:w-1/2 max-w-screen-2xl mx-auto gap-6">
        <h1 className="text-4xl font-bold">Buy the best car, here!</h1>
        <p>
          Welcome to CarZone. We provide the best cars for you. Choose and buy
          only at CarZone.
        </p>
        <Button className="btn btn-primary max-w-32">Get Started</Button>
      </div>
      <div className="flex flex-row w-full lg:w-1/2 rounded-tl-[3rem] max-w-screen-2xl mx-auto mt-3 px-10 pt-10 items-center bg-primary">
        <Image
          src="/static/mercy-car.png"
          alt="hero-car"
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default Hero;
