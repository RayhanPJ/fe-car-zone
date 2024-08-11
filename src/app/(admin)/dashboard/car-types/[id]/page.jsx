import BreadCrumb from "@/components/common/BreadCrumb";
import UpdateForm from "./_components/UpdateForm";
import { Card } from "@/components/ui/card";
import { API_BASE_URL } from "@/constants/variables";

const getCarTypeByID = async (id) => {
  const req = await fetch(API_BASE_URL + "/api/cms/type-cars/" + id, {
    cache: "no-store",
  });
  return await req.json();
};

const UpdateCarTypePage = async ({ params }) => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between gap-2 py-10 px-3">
        <div className="">
          <h1 className="text-2xl font-bold">Update Car Type Data</h1>
          <BreadCrumb />
        </div>
      </div>

      <Card className="p-5 min-h-fit overflow-x-auto">
        <UpdateForm carTypeID={params.id} />
      </Card>
    </>
  );
};

export const generateMetadata = async ({ params }) => {
  const data = await getCarTypeByID(params.id);

  return {
    title: `Update "${data?.name}"`,
  };
};

export default UpdateCarTypePage;
