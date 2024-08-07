import BreadCrumb from "@/components/common/BreadCrumb";
import DataTable from "./_components/DataTable";
import { Card } from "@/components/ui/card";

const TransactionPage = () => {
  return (
    <>
      <div className="flex items-center justify-between gap-2 py-10 px-3">
        <div className="">
          <h1 className="text-2xl font-bold">Transaction</h1>
          <BreadCrumb />
        </div>
      </div>

      <Card className="p-5 min-h-fit overflow-x-auto">
        <DataTable />
      </Card>
    </>
  );
};

export default TransactionPage;
