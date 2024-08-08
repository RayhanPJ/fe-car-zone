import BreadCrumb from "@/components/common/BreadCrumb";
import UpdateForm from "./_components/UpdateForm";
import { Card } from "@/components/ui/card";

export const metadata = {
  title: "Update User | Dashboard Carzone",
};

const UpdateUserPage = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between gap-2 py-10 px-3">
        <div className="">
          <h1 className="text-2xl font-bold">Update User Data</h1>
          <BreadCrumb />
        </div>
      </div>

      <Card className="p-5 min-h-fit overflow-x-auto">
        <UpdateForm />
      </Card>
    </>
  );
};

export default UpdateUserPage;
