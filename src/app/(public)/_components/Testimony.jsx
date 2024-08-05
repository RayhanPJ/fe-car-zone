"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { Star } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

const Testimony = () => {
  const testi = [
    {
      id: 1,
      name: "Rayhan Putra Jafandi",
      image: "/logo.png",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam!",
    },
    {
      id: 2,
      name: "Salman A. J. Wiharja",
      image: "/logo.png",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam!",
    },
    {
      id: 3,
      name: "Rifki Ahmad Fahrezi",
      image: "/logo.png",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam!",
    },
    {
      id: 4,
      name: "Viki Ade Safaat",
      image: "/logo.png",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam!",
    },
    {
      id: 5,
      name: "Afif Al Arasyi",
      image: "/logo.png",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam!",
    },
    {
      id: 6,
      name: "Rafi Farhan Sabkiya",
      image: "/logo.png",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam!",
    },
  ];
  return (
    <section className="space-y-3">
      <h2 className="text-3xl font-bold">Testimony</h2>
      <p>Positive reviews from our customers</p>
      <div className="flex flex-row justify-center items-center">
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="w-full max-w-xl"
        >
          <CarouselContent>
            {testi.map((item, index) => (
              <CarouselItem key={index}>
                <Card className="flex flex-row px-5 py-10">
                  <CardHeader className="flex flex-col justify-center max-w-64">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={300}
                      height={300}
                      className="border-2 rounded-full"
                    />
                  </CardHeader>
                  <CardContent className="py-5 space-y-3">
                    <span className="flex flex-row">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star
                          key={index}
                          className="text-yellow-400 fill-yellow-400"
                        />
                      ))}
                    </span>
                    <p>{item.review}</p>
                    <h4 className="font-bold">{item.name}</h4>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div>
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimony;
