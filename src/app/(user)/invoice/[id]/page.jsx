"use client";
import Invoice from "./_components/Invoice";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useCallback, useEffect, useMemo, useRef } from "react";
import PrintInvoice from "./_components/PrintInvoice";
import useSWR from "swr";
import { fetcher } from "@/api";
import { useAuth } from "@/hooks/useAuth";
import { Spinner } from "@/components/common/Spinner";
import { useRouter } from "next/navigation";
import Image from "next/image";

const InvoicePage = ({ params }) => {
  const { auth } = useAuth();
  const invoiceRef = useRef(null);
  const { data: transaction, isLoading } = useSWR(
    "/api/cms/orders/" + auth.userId,
    fetcher
  );
  const myOrder = useMemo(
    () => transaction?.data.filter((i) => i.id == params.id),
    [transaction]
  );
  const router = useRouter();
  const handleDownload = useCallback(async (id) => {
    const invoice = invoiceRef.current;

    try {
      const canvas = await html2canvas(invoice);
      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "px",
        format: "a4",
      });

      const width = pdf.internal.pageSize.getWidth();
      const height = (canvas.height * width) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, width, height);
      pdf.save(`invoice-${id}-${+new Date()}`);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    if (transaction) {
      // console.log(transaction?.data[0]?.user_id, auth.userId)
      if (auth.userId != transaction?.data[0]?.user_id) {
        // console.log("ok")
        router.back();
      }
    }
  }, [transaction]);

  if (isLoading) return <Spinner className={"mx-auto my-10"} />;
  // console.log(myOrder)
  return (
    <>
      <PrintInvoice onClick={() => handleDownload(params.id)} />
      <div ref={invoiceRef} className="relative">
        <Invoice orderData={myOrder[0]} />
        {myOrder[0]?.status && (
          <div className="absolute top-2/4 -translate-y-2/4 left-2/4 -translate-x-2/4 opacity-10 w-2/4">
            <Image
              className="w-full"
              priority
              src={"/static/paid-stamp.png"}
              width={250}
              height={250}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default InvoicePage;
