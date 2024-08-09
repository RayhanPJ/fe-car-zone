import React from "react";
import data from "@/constants/dataDummy";
import HeadInvoice from "./_components/HeadInvoice";
import InfoInvoice from "./_components/InfoInvoice";
import TableInvoice from "./_components/TableInvoice";
import CalculateInvoice from "./_components/CalculateInvoice";
import PrintInvoice from "./_components/PrintInvoice";

const InvoicePage = () => {
  const { invoice_no, buyer, date, contact, product, shipping } = data[0];

  return (
    <section className="flex flex-col gap-3 p-5 w-full min-h-100% justify-center items-center">
      <div className="w-full px-6">
        <PrintInvoice />
      </div>
      <div className="w-auto p-5 rounded-sm shadow-lg bg-slate-100 text-black">
        <HeadInvoice invoice_id={invoice_no} />
        <InfoInvoice buyer={buyer} date={date} contact={contact} />
        <TableInvoice product={product} />
        <div className="grid grid-cols-3 gap-3 pr-4 justify-end">
          <div className=""></div>
          <div className="col-span-2 w-full pr-5">
            <CalculateInvoice
              productTotal={product.total}
              shippingCost={shipping.cost}
              insurance={shipping.insurance}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvoicePage;
