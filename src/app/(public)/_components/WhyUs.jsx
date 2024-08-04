import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Clock, Medal, TagIcon, ThumbsUp } from "lucide-react";
import React from "react";

const WhyUs = () => {
  return (
    <section className="flex flex-col w-full justify-start gap-6 mx-auto">
      <div className="flex flex-col space-y-3">
        <h2 className="text-3xl font-bold">Why Us?</h2>
        <p>We provide the best cars for you. Choose and buy only at CarZone.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pr-5">
        <Card>
          <CardHeader>
            <div className="flex items-center rounded-full w-fit p-2 bg-yellow-500 text-secondary">
              <ThumbsUp className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold">Complete Cars</h3>
          </CardHeader>
          <CardContent>
            <p>
              There are many types of cars available, ranging from SUVs, Sedans,
              Pickups, etc.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex items-center rounded-full w-fit p-2 bg-red-500 text-secondary">
              <TagIcon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold">Low Prices</h3>
          </CardHeader>
          <CardContent>
            <p>
              Low and competitive prices, can compare our prices with other car
              sales websites.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex items-center rounded-full w-fit p-2 bg-blue-500 text-secondary">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold">Quick Response</h3>
          </CardHeader>
          <CardContent>
            <p>
              Ready to serve your enquiry for 24 hours non-stop. We are also
              available on weekends.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex items-center rounded-full w-fit p-2 bg-green-500 text-secondary">
              <Medal className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold">Guaranteed</h3>
          </CardHeader>
          <CardContent>
            <p>
              There are many types of cars available, ranging from SUVs, Sedans,
              Pickups, etc.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default WhyUs;
