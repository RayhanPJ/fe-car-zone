import React from "react";

const InfoInvoice = ({ buyer, date, contact }) => {
  return (
    <>
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
                <td className="font-bold pl-1">{buyer}</td>
              </tr>
              <tr>
                <th className="font-normal">Tanggal Pembelian</th>
                <td className="pl-1">:</td>
                <td className="pl-1 font-bold">{date}</td>
              </tr>
              <tr>
                <th className="font-normal align-top">Alamat Pengiriman</th>
                <td className="align-top pl-1">:</td>
                <td className="pl-1">
                  <span className="font-bold">{contact.name}</span> (
                  {contact.number}) <br />
                  {contact.address}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default InfoInvoice;
