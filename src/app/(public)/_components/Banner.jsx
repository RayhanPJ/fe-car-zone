import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full bg-primary p-12 gap-6 text-white rounded-md">
      <h2 className="text-3xl font-bold text-center">Buy your best car now</h2>
      <p className="px-20 text-center">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
        corrupti iste cum, molestias quia atque animi saepe explicabo ratione
        pariatur dignissimos similique dolore vero aspernatur possimus. At ut
        aliquam perferendis!
      </p>
      <Link href="/cars">
        <Button className="btn btn-success hover:bg-success-900 max-w-32">
          Get Started
        </Button>
      </Link>
    </section>
  );
};

export default Banner;