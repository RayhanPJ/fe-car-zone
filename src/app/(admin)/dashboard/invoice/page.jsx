import React from "react";
import Image from "next/image";
import formatCurrency from "@/lib/currencyFormat";

const InvoicePage = () => {
  const data = [
    {
      id: 1,
      invoice_id: "INV-001/2024/08/05/SUV/81278624872",
      buyer: "Salman Wiharja",
      date: "31 July 2024",
      contact: {
        name: "Salman Wiharja",
        number: "08123456789",
        address: "Jl. Memanusiakan Manusia No. 123, Jakarta",
      },
      product: {
        id: 1,
        name: "GT-R NISMO®",
        variant: "ATTESA E-TS® All-Wheel Drive",
        color: "Black",
        quantity: 1,
        price: 4000000000,
        total: 4000000000,
      },
      shipping: {
        cost: 1000000,
        insurance: 500000,
      },
    },
  ];

  return (
    <section className="flex flex-col gap-3 p-5 w-full justify-center items-center">
      <div className="w-auto p-5 rounded-sm shadow-lg bg-slate-100 text-black">
        {/* Head */}
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
            <p className="text-md">{data[0].invoice_id}</p>
          </div>
        </div>
        {/* Info */}
        <div className="flex flex-row justify-between0">
          <div className="flex flex-col text-left w-1/3">
            <h4 className="text-lg font-bold">ISSUED IN THE NAME OF</h4>
            <div className="flex flex-row gap-3">
              <p className="text-md">Seller:</p>
              <p className="font-bold text-md">CarZone</p>
            </div>
          </div>
          <div className="flex flex-col text-left w-2/3">
            <h4 className="text-lg font-bold">FOR</h4>
            <table className="w-fit">
              <tbody className="text-left text-md">
                <tr>
                  <th className="font-normal">Pembeli</th>
                  <td className="pl-1">:</td>
                  <td className="font-bold pl-1">{data[0].buyer}</td>
                </tr>
                <tr>
                  <th className="font-normal">Tanggal Pembelian</th>
                  <td className="pl-1">:</td>
                  <td className="pl-1 font-bold">{data[0].date}</td>
                </tr>
                <tr>
                  <th className="font-normal align-top">Alamat Pengiriman</th>
                  <td className="align-top pl-1">:</td>
                  <td className="pl-1">
                    <span className="font-bold">{data[0].contact.name}</span> (
                    {data[0].contact.number}) <br />
                    {data[0].contact.address}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* Table */}
        <table className="my-3">
          <thead>
            <tr className="border-y-2 border-black">
              <th className="py-3">PRODUCT INFO</th>
              <th className="py-3">AMMOUNT</th>
              <th className="py-3">UNIT PRICE</th>
              <th className="py-3">TOTAL PRICE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-3 px-4">
                <strong className="text-primary">{data[0].product.name}</strong>{" "}
                <br />
                <span className="text-sm">
                  variant: {data[0].product.variant}{" "}
                </span>
              </td>
              <td className="py-3 px-4 text-center">
                {data[0].product.quantity}
              </td>
              <td className="py-3 px-4 text-right">
                {formatCurrency(data[0].product.price)}
              </td>
              <td className="py-3 px-4 text-right">
                {formatCurrency(data[0].product.total)}
              </td>
            </tr>
          </tbody>
        </table>
        {/* Calculations */}
        <div className="grid grid-cols-2 gap-3 pr-4">
          <div></div>
          <div className="flex flex-col space-y-4">
            <div className="flex flex-row justify-between font-bold">
              <span>TOTAL PRICE</span>
              <span>{formatCurrency(data[0].product.total)}</span>
            </div>
            <div className="flex flex-row justify-between">
              <span>Total Shipping Cost</span>
              <span>{formatCurrency(data[0].shipping.cost)}</span>
            </div>
            <div className="flex flex-row justify-between">
              <span>Shipping Insurance Fee</span>
              <span>{formatCurrency(data[0].shipping.insurance)}</span>
            </div>
            <div className="flex flex-row justify-between font-bold">
              <span>TOTAL BILLS</span>
              <span>
                {formatCurrency(
                  data[0].product.total +
                    data[0].shipping.cost +
                    data[0].shipping.insurance
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvoicePage;
