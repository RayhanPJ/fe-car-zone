import React from "react";

const InfoInvoice = ({ buyer, date, contact, address }) => {
  return (
    <>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col text-left w-1/3">
          <h4 className="text-lg font-bold">ISSUED IN THE NAME OF</h4>
          <div className="flex flex-row gap-3">
            <p className="text-md">Seller:</p>
            <p className="font-bold text-md">CarZone</p>
          </div>
        </div>
        <div className="flex flex-col text-left">
          <h4 className="text-lg font-bold">FOR</h4>
          <table className="w-fit">
            <tbody className="text-left text-md">
              <tr>
                <th className="font-normal">Buyer</th>
                <td className="pl-1">:</td>
                <td className="font-bold pl-1">{buyer}</td>
              </tr>
              <tr>
                <th className="font-normal">Payment date</th>
                <td className="pl-1">:</td>
                <td className="pl-1 font-bold">{new Date(date).toLocaleString()}</td>
              </tr>
              <tr>
                <th className="font-normal">Contact</th>
                <td className="pl-1">:</td>
                <td className="pl-1 font-bold">{contact}</td>
              </tr>
              <tr>
                <th className="font-normal align-top">Address</th>
                <td className="align-top pl-1">:</td>
                <td className="pl-1 font-bold"> 
                  {address}
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
