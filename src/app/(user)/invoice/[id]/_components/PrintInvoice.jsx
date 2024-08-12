import { Button } from "@/components/ui/button";
import React from "react";
import { ArrowDownToLine } from "lucide-react";
import { cn } from "@/lib/utils";

const PrintInvoice = ({ className, ...props }) => {
  return (
    <>
      <Button className={cn("gap-3", className)} {...props}>
        <ArrowDownToLine />
        Download Invoice
      </Button>
    </>
  );
};

export default PrintInvoice;
