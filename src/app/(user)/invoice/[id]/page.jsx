"use client"
import Invoice from "./_components/Invoice";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useCallback, useRef } from "react";
import PrintInvoice from "./_components/PrintInvoice";
import useSWR from "swr";
import { fetcher } from "@/api";
import { useAuth } from "@/hooks/useAuth";

const InvoicePage = ({ params }) => {
  const { auth } = useAuth()
  const invoiceRef = useRef(null)
  const { data } = useSWR("/api/cms/orders/" + auth.userId , fetcher)

  console.log(data)

  const handleDownload = useCallback( async (id) => {
    const invoice = invoiceRef.current

    try {
      const canvas = await html2canvas(invoice)
      const imgData = canvas.toDataURL("image/png")

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "px",
        format:"a4"
      })

      const width = pdf.internal.pageSize.getWidth()
      const height = (canvas.height * width) / canvas.width

      pdf.addImage(imgData, "PNG", 0,0, width, height)
      pdf.save(`invoice-${id}-${+new Date()}`)

    } catch (error) {
      console.error(error)
    }
  }, [])

  return (
  <>
    <PrintInvoice onClick={() => handleDownload(params.id)} />
    <div ref={invoiceRef}>
      <Invoice invoiceData={data} />
    </div>
  </>
  );
};

export default InvoicePage;
