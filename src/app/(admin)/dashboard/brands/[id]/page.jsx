"use client";

import BreadCrumb from "@/components/common/BreadCrumb";
import UpdateForm from "./_components/UpdateForm";
import { BackButton } from "@/components/common/BackButton";
import { Card } from "@/components/ui/card";
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import API from "@/api";
import { Spinner } from "@nextui-org/react";

const UpdateBrandsPage = () => {
  const router = useRouter();
  const { id } = useParams();
  const [brandData, setBrandData] = useState(null);

  useEffect(() => {
    if (id) {
      API.get(`/api/cms/brand-cars/${id}`)
        .then((res) => {
          setBrandData(res.data);
        })
        .catch((error) => {
          console.error("Failed to fetch brand data:", error);
        });
    }
  }, [id]);

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between gap-2 py-10 px-3">
        <div>
          <h1 className="text-2xl font-bold">Update Brand Data</h1>
          <BreadCrumb />
        </div>
      </div>

      <Card className="p-5 min-h-fit overflow-x-auto">
        {brandData ? (
          <UpdateForm brandId={id} brandData={brandData} />
        ) : (
          <Spinner />
        )}
      </Card>
    </>
  );
};

export default UpdateBrandsPage;
