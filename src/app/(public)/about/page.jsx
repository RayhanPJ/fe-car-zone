import { CarZoneLogo } from "@/components/icons";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div>
      <div className="flex justify-center items-center mx-auto gap-5 flex-wrap md:flex-nowrap min-h-[85vh]">
        <div className=" w-[35rem] dark:bg-gray-800 bg-slate-50 p-10 rounded-2xl">
          <div className="text-4xl font-semibold min-h-[17rem]">
            Welcome to Carzone,
            <br />
            your{" "}
            <span className="text-blue-500">
              trusted partner in buying and selling cars.
            </span>
          </div>
          <div className="text-sm text-gray-700">
            At Carzone, we understand that purchasing a vehicle is a significant
            decision. That’s why we strive to offer not just a wide selection of
            high-quality vehicles, but also exceptional customer service to
            guide you through every step of the process. Whether you are looking
            for a family car, a sporty convertible, or a reliable SUV, our
            extensive inventory and knowledgeable staff are here to help you
            find the perfect match.
          </div>
        </div>
        <div className="flex flex-col min-h-[17rem] gap-1">
          <div className="  rounded-3xl max-h-56 mb-10">
            <Image
              src={"/static/mobil-sedan.png"}
              width={300}
              height={0}
              className="mx-auto mt-[-34px]"
              alt="mercedez benz car"
            />
          </div>
          <div className=" bg-slate-50 dark:bg-gray-800 p-5 rounded-2xl flex w-[500px] flex-wrap items-center justify-center gap-5">
            <div className="bg-white dark:bg-gray-600  w-52 p-3 rounded-2xl">
              <div className="text-3xl font-semibold text-blue-500">3</div>
              <div className="text-sm">Years Experience</div>
            </div>{" "}
            <div className="bg-white dark:bg-gray-600 w-52 p-3 rounded-2xl">
              <div className="text-3xl font-semibold text-blue-500">830+</div>
              <div className="text-sm">Positive Review</div>
            </div>{" "}
            <div className="bg-white dark:bg-gray-600 w-52 p-3 rounded-2xl">
              <div className="text-3xl font-semibold text-blue-500">5K</div>
              <div className="text-sm">Trusted Customers</div>
            </div>{" "}
            <div className="bg-white dark:bg-gray-600 w-52 p-3 rounded-2xl">
              <div className="text-3xl font-semibold text-blue-500">50</div>
              <div className="text-sm">Cars Models</div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 flex items-center justify-center bg-primary dark:bg-gray-800 text-white pb-10 ">
        <div className="w-[70%] mx-auto mt-10 flex justify-center flex-col ">
          <div>
            <div className="text-3xl font-semibold text-center mb-5">
              ABOUT US
            </div>
          </div>
          <div className="flex justify-center gap-10 flex-wrap md:flex-nowrap">
            <div className="text-4xl font-semibold">Services Offered</div>
            <div>
              <div className="font-semibold mb-3">
                Founded in 2020, Carzone has grown to become a leading
                marketplace for both new and used cars. Our vision is to
                revolutionize the car buying and selling process through
                innovation and customer-centric services.
              </div>
              <div>
                At Carzone, we offer a wide range of services including new and
                used car sales, financing options, and after-sales support. Our
                unique features and dedicated team ensure you receive the best
                deals and services in the market.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] mx-auto mt-10 flex justify-center flex-col p-10">
        <div>
          <div className="text-4xl font-semibold text-center mb-5">
            Our <span className="text-primary">Brands</span>
          </div>
          <p className="text-center text-gray-700">
            At Carzone, we pride ourselves on offering a wide range of
            high-quality vehicles from some of the world's most renowned
            automotive brands. Whether you are looking for a reliable family
            car, a sleek sports car, or a versatile SUV, we have the perfect
            vehicle for you. Here are some of the prestigious brands you will
            find in our inventory:
          </p>
        </div>
        <div className="flex justify-center gap-10 flex-wrap md:flex-nowrap mt-10">
          <div className="flex gap-10 flex-wrap">
            <Image
              className="filter grayscale hover:grayscale-0 transition duration-300"
              src={"/static/merek1.png"}
              width={50}
              height={40}
            />
            <Image
              className="filter grayscale hover:grayscale-0 transition duration-300"
              src={"/static/merek2.png"}
              width={50}
              height={40}
            />
            <Image
              className="filter grayscale hover:grayscale-0 transition duration-300"
              src={"/static/merek3.png"}
              width={50}
              height={40}
            />
            <Image
              className="filter grayscale hover:grayscale-0 transition duration-300"
              src={"/static/merek4.png"}
              width={50}
              height={40}
            />
            <Image
              className="filter grayscale hover:grayscale-0 transition duration-300"
              src={"/static/merek5.png"}
              width={50}
              height={40}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
