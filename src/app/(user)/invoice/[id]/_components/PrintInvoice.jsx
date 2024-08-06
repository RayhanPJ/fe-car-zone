import { Button } from "@/components/ui/button";
import React from "react";
import { ArrowDownToLine } from "lucide-react";

const PrintInvoice = () => {
  return (
    <>
      <Button className="gap-3">
        <ArrowDownToLine />
        Download Invoice
      </Button>
    </>
  );
};

export default PrintInvoice;
