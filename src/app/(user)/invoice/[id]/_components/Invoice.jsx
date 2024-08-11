import React from "react";
import data from "@/constants/dataDummy";
import HeadInvoice from "./HeadInvoice";
import InfoInvoice from "./InfoInvoice";
import TableInvoice from "./TableInvoice";
import CalculateInvoice from "./CalculateInvoice";

const Invoice = ({ inVoice }) => {
  const { invoice_no, buyer, date, contact, product, shipping } = data[0];

  return (
    <section className="flex flex-col gap-3 p-5 w-full min-h-100% justify-center items-center">
      <div className="w-auto p-5 rounded-sm">
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

export default Invoice;
