import BreadCrumb from "@/components/common/BreadCrumb";
import DetailTransaction from "./_components/DetailTransaction";
import { Card } from "@/components/ui/card";

export const metadata = {
  title: "Detail Transaction | Dashboard Carzone",
};

const DetailTransactionPage = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between gap-2 py-10 px-3">
        <div className="">
          <h1 className="text-2xl font-bold">Transaction Data</h1>
          <BreadCrumb />
        </div>
      </div>

      <Card className="p-5 min-h-fit overflow-x-auto">
        <DetailTransaction />
      </Card>
    </>
  );
};

export default DetailTransactionPage;
