import React from "react";
import formatCurrency from "@/lib/currencyFormat";

const CalculateInvoice = ({ total }) => {
  // const totalBills = productTotal + shippingCost + insurance;

  return (
    <div className="w-2/4 ml-auto">
      <div className="flex items-center justify-between font-bold">
        <div>TOTAL AMOUNT</div>
        <div>{formatCurrency(total)}</div>
      </div>
    </div>
  );
};

export default CalculateInvoice;
