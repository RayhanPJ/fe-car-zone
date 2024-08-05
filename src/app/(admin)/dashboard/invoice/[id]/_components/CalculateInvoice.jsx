import React from "react";
import formatCurrency from "@/lib/currencyFormat";

const CalculateInvoice = ({ productTotal, shippingCost, insurance }) => {
  const totalBills = productTotal + shippingCost + insurance;

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex flex-row justify-between font-bold">
        <span>TOTAL PRICE</span>
        <span>{formatCurrency(productTotal)}</span>
      </div>
      <div className="flex flex-row justify-between">
        <span>Total Shipping Cost</span>
        <span>{formatCurrency(shippingCost)}</span>
      </div>
      <div className="flex flex-row justify-between">
        <span>Shipping Insurance Fee</span>
        <span>{formatCurrency(insurance)}</span>
      </div>
      <div className="flex flex-row justify-between font-bold">
        <span>TOTAL BILLS</span>
        <span>{formatCurrency(totalBills)}</span>
      </div>
    </div>
  );
};

export default CalculateInvoice;
