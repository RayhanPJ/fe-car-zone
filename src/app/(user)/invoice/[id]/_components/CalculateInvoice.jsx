import React from "react";
import formatCurrency from "@/lib/currencyFormat";

const CalculateInvoice = ({ price }) => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex flex-row justify-between font-bold">
        <span>TOTAL PRICE</span>
        <span>{formatCurrency(price)}</span>
      </div>
    </div>
  );
};

export default CalculateInvoice;
