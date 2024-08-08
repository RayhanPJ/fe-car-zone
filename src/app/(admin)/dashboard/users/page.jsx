import React from "react";
import BreadCrumb from "@/components/common/BreadCrumb";
import DataTable from "./_components/DataTable";
import { Card } from "@/components/ui/card";
import Link from "next/link";

const UsersListPage = () => {
  return (
    <>
      <div className="flex items-center justify-between gap-2 py-10 px-3">
        <div className="">
          <h1 className="text-2xl font-bold">Transaction</h1>
          <BreadCrumb />
        </div>

        <Link className="btn btn-default" href={"/dashboard/users/add"}>
          Add New User
        </Link>
      </div>

      <Card className="p-5 min-h-fit overflow-x-auto">
        <DataTable />
      </Card>
    </>
  );
};

export default UsersListPage;
