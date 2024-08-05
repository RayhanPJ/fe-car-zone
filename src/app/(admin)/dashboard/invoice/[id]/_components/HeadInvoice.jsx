import React from "react";
import Image from "next/image";

const HeadInvoice = ({ invoice_id }) => {
  return (
    <>
      <div className="flex flex-row justify-between">
        <Image
          src="/logo.png"
          alt="logo"
          width={100}
          height={100}
          className="rounded-xl"
        />
        <div className="flex flex-col gap-3 justify-center">
          <h3 className="text-2xl font-bold text-right">INVOICE</h3>
          <p className="text-md">{invoice_id}</p>
        </div>
      </div>
    </>
  );
};

export default HeadInvoice;
