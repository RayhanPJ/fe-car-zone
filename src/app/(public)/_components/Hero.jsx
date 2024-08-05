import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section className="flex flex-col-reverse md:flex-row justify-between py-10 items-center">
        <article className="w-full text-primary-foreground md:text-accent-foreground">
          <h1 className="w-full md:w-[90%] text-4xl font-bold capitalize text-center md:text-left">
            Buy the best car, here!
          </h1>
          <p className="text-base mt-3 w-full md:w-3/4 text-center md:text-left">
            Welcome to CarZone. We provide the best cars for you. Choose and buy
            only at CarZone.
          </p>
          <Link href={"/cars"}>
            <Button className="btn btn-primary max-w-32 mt-3">
              Get Started
            </Button>
          </Link>
        </article>
        <div className="w-full">
          <Image
            src={"/static/mercy-car.png"}
            width={500}
            height={500}
            className="mx-auto"
            alt="mercedez benz car"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
