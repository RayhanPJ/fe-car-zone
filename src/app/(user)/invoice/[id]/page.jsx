"use client";

import React from "react";
import { fetcher } from "@/api";
import HeadInvoice from "./_components/HeadInvoice";
import InfoInvoice from "./_components/InfoInvoice";
import TableInvoice from "./_components/TableInvoice";
import CalculateInvoice from "./_components/CalculateInvoice";
import PrintInvoice from "./_components/PrintInvoice";
import { Spinner } from "@/components/common/Spinner";
import useSWR from "swr";
import { useRouter } from "next/router";

const InvoicePage = () => {
  const router = useRouter();
  const { id } = router.query;

  console.log(id);

  const { data: orders, isLoading } = useSWR(
    id ? `/api/cms/orders/${id}` : null,
    fetcher,
    { revalidateOnFocus: true }
  );

  if (isLoading) {
    return (
      <div className="mx-auto">
        <Spinner />
      </div>
    );
  }

  if (!orders || !orders.data) {
    return <div>No orders data found</div>;
  }

  const invoice = orders.data; // Data invoice langsung dari response

  return (
    <section className="flex flex-col gap-3 p-5 w-full min-h-100% justify-center items-center">
      <div className="w-full px-6">
        <PrintInvoice />
      </div>
      <div className="w-auto p-5 rounded-sm shadow-lg bg-slate-100 text-black">
        <HeadInvoice invoice_id={invoice.id} />
        <InfoInvoice
          buyer={invoice.user.username}
          date={invoice.updated_at}
          contact={invoice.user.phone_number || "N/A"}
        />
        <TableInvoice product={invoice.car.name} />
        <div className="grid grid-cols-3 gap-3 pr-4 justify-end">
          <div className=""></div>
          <div className="col-span-2 w-full pr-5">
            <CalculateInvoice price={invoice.car.price} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvoicePage;
