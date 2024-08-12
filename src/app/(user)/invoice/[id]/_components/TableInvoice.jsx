import React from "react";
import formatCurrency from "@/lib/currencyFormat";
import { Badge } from "@/components/ui/badge";

const TableInvoice = ({ product, status }) => {
  return (
    <>
      <table className="my-7 w-full">
        <thead>
          <tr className="border-y-2 border-black">
            <th className="py-3">Product</th>
            <th className="py-3">Price</th>
            <th className="py-3">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-3 px-4 text-center">
              {product?.name} ({product?.ID})
            </td>
            <td className="py-3 px-4 text-center">
              {formatCurrency(product?.price)}
            </td>
            <td className="py-3 px-4 text-center">
              {status ? (
                <Badge variant={"success"}>Paid (Confirmed)</Badge>
              ) : (
                <Badge variant={"destructive"}>Pending</Badge>
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default TableInvoice;
