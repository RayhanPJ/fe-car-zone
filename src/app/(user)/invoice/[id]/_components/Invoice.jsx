import React from "react";
// import data from "@/constants/dataDummy";
import HeadInvoice from "./HeadInvoice";
import InfoInvoice from "./InfoInvoice";
import TableInvoice from "./TableInvoice";
import CalculateInvoice from "./CalculateInvoice";

const Invoice = ({ orderData }) => {
  // const { invoice_no, buyer, date, contact, product, shipping } = data[0];

  // console.log(orderData)
  return (
    <section className="flex flex-col gap-3 p-5 mt-5 w-full justify-center items-center dark:bg-white dark:text-black">
      <div className="w-full p-5 rounded-sm">
        <HeadInvoice />
        <InfoInvoice
          buyer={orderData?.user.username}
          date={orderData?.created_at}
          contact={orderData?.user.phone_number || orderData?.user.email}
          address={orderData?.user.address}
        />
        <TableInvoice product={orderData?.car} status={orderData?.status} />
        <div className="flex items-center justify-between">
          <div className=""></div>
          <div className="col-span-2 w-full">
            <CalculateInvoice total={orderData?.total_price} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Invoice;
