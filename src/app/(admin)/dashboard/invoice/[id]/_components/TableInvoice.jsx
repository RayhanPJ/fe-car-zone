import React from "react";
import formatCurrency from "@/lib/currencyFormat";

const TableInvoice = ({ product }) => {
  return (
    <>
      <table className="my-3">
        <thead>
          <tr className="border-y-2 border-black">
            <th className="py-3">PRODUCT INFO</th>
            <th className="py-3">AMOUNT</th>
            <th className="py-3">UNIT PRICE</th>
            <th className="py-3">TOTAL PRICE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-3 px-4">
              <strong className="text-primary">{product.name}</strong> <br />
              <span className="text-sm">variant: {product.variant} </span>
            </td>
            <td className="py-3 px-4 text-center">{product.quantity}</td>
            <td className="py-3 px-4 text-right">
              {formatCurrency(product.price)}
            </td>
            <td className="py-3 px-4 text-right">
              {formatCurrency(product.total)}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default TableInvoice;
