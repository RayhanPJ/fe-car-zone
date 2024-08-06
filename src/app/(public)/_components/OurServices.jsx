import React from "react";
import Image from "next/image";
import { CircleCheckBig } from "lucide-react";

const OurServices = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-6">
      <div className="flex flex-col w-full lg:w-1/2 max-w-screen-2xl mx-auto px-5 items-center">
        <Image
          src="/static/service.svg"
          alt="hero-car"
          width={400}
          height={400}
          priority
          style={{ width: "auto", height: "auto" }}
        />
      </div>
      <div className="flex flex-col justify-center w-full lg:w-1/2 max-w-screen-2xl mx-auto px-5 gap-6">
        <h2 className="text-3xl font-bold">
          The best car buying website in Indonesia!
        </h2>
        <p>
          Buy Car in Indonesia with CarZone guaranteed cheaper price than
          others.
        </p>
        <ul className="space-y-3">
          <li className="flex flex-row gap-3 items-center">
            <CircleCheckBig className="text-primary" size={30} />
            <p>Cheaper price than others.</p>
          </li>
          <li className="flex flex-row gap-3 items-center">
            <CircleCheckBig className="text-primary" size={30} />
            <p>Best service for car purchase.</p>
          </li>
          <li className="flex flex-row gap-3 items-center">
            <CircleCheckBig className="text-primary" size={30} />
            <p>Easy payment.</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default OurServices;
