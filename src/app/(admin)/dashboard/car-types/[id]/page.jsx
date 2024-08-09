"use client";

import BreadCrumb from "@/components/common/BreadCrumb";
import UpdateForm from "./_components/UpdateForm";
import { Card } from "@/components/ui/card";
import { API_BASE_URL } from "@/constants/variables";
import { useEffect, useState } from "react";

const getCarByID = async (id) => {
  try {
    const req = await fetch(API_BASE_URL + "/api/cms/type-cars/" + id, {
      cache: "no-store",
    });
    if (!req.ok) {
      throw new Error("Failed to fetch car type data");
    }
    return await req.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

const UpdateCarTypePage = ({ params }) => {
  const [carType, setCarType] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCarByID(params.id);
      if (data) {
        setCarType(data);
      }
    };

    fetchData();
  }, [params.id]);

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between gap-2 py-10 px-3">
        <div className="">
          <h1 className="text-2xl font-bold">Update Car Type Data</h1>
          <BreadCrumb />
        </div>
      </div>

      <Card className="p-5 min-h-fit overflow-x-auto">
        <UpdateForm carID={params.id} carTypeData={carType} />
      </Card>
    </>
  );
};

export default UpdateCarTypePage;
