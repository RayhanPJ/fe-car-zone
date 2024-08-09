import BreadCrumb from "@/components/common/BreadCrumb";
import React from "react";
import DataTable from "./_components/DataTable";
import Link from "next/link";
import { Card } from "@/components/ui/card";

export const metadata = {
  title: "Brand Brands | Dashboard Brandzone",
};

const BrandBrands = () => {
  return (
    <div>
      <div className="flex items-center justify-between gap-2 py-10 px-3">
        <div className="">
          <h1 className="text-2xl font-bold">Brand Brands</h1>
          <BreadCrumb />
        </div>

        <Link className="btn btn-default" href={"/dashboard/brands/add"}>
          Add New Brand
        </Link>
      </div>
      <Card className="p-5 min-h-fit overflow-x-auto">
        <DataTable />
      </Card>
    </div>
  );
};

export default BrandBrands;
