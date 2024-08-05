import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Question = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-3">
      {/* Left */}
      <div className="flex flex-col justify-start py-3 w-full lg:w-1/2 max-w-screen-2xl mx-auto gap-6">
        <h2 className="text-3xl font-bold">Frequently Asked Question</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          ducimus quibusdam fugiat ipsam sed dolorum sunt ex iste non laborum.
        </p>
      </div>
      {/* Right */}
      <div className="flex flex-row w-full lg:w-1/2 max-w-screen-2xl mx-auto pr-5">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="outline-none">
              What are the requirements?
            </AccordionTrigger>
            <AccordionContent className="outline-none">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              eum iure aspernatur nisi dignissimos qui!
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="outline-none">
              How many days does it take to deliver?
            </AccordionTrigger>
            <AccordionContent className="outline-none">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              quas, vel ex facilis placeat ab harum? At, iusto voluptates?
              Harum.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="outline-none">
              Is there an admin fee?
            </AccordionTrigger>
            <AccordionContent className="outline-none">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              voluptate quidem, et vero animi quibusdam praesentium at provident
              veritatis beatae consequuntur placeat minus reiciendis dolorum
              tempora incidunt, consectetur cumque inventore.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="outline-none">
              What if there is damage when the goods arrive?
            </AccordionTrigger>
            <AccordionContent className="outline-none">
              Lorem ipsum dolor sit amet.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default Question;
