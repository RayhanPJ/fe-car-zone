"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { usePayment } from "./usePayment";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import formatCurrency from "@/lib/currencyFormat";
import { fetcher } from "@/api";
import { API_BASE_URL } from "@/constants/variables";
import useSWR from "swr";
import { useEffect } from "react";

const PaymentDetail = () => {
  const { payment, setTotalAmount } = usePayment();
  const { data, error, isLoading } = useSWR(API_BASE_URL + "/api/cms/cars/" + payment.carID, fetcher)


  useEffect(() => {    
    if(!isLoading && !error){
      setTotalAmount(data?.car.price)
    }
  }, [isLoading, error])
  return (
    <>
      <Accordion
        type="single"
        defaultValue="payment-detail"
        collapsible
        className="border px-3"
      >
        <AccordionItem value="payment-detail">
          <AccordionTrigger className="font-bold">
            Payment details
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col md:flex-row items-start my-3 md:items-center justify-between mb-5">
              <span className="flex items-center gap-2 font-bold">
                Total price
              </span>
              <span className="flex items-center gap-2 font-bold">
                {isLoading 
                ? "Loading..."
                : formatCurrency(data?.car?.price)
                }
              </span>
            </div>
            <div className="flex flex-col md:flex-row items-start my-3 md:items-center justify-between mb-5">
              {payment.paymentProvider && (
                <>
                  <span className="flex items-center gap-2 font-bold">
                    Payment provider
                  </span>
                  <span className="flex items-center gap-2 font-bold">
                    <Badge variant={"outline"}>{payment.paymentProvider}</Badge>
                  </span>
                </>
              )}
            </div>
            {payment.paymentProvider && (
              <Link href={`/checkout/pay`} className="btn btn-default">
                Transfer now
              </Link>
            )}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default PaymentDetail;
