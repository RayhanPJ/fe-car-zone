import BreadCrumb from "@/components/common/BreadCrumb"
import UpdateForm from "./_components/UpdateForm"
import { Card } from "@/components/ui/card"
import { API_BASE_URL } from "@/constants/variables"

const getCarByID = async (id) => {
  const req = await fetch(API_BASE_URL + "/api/cms/cars/" + id,  { cache: "no-store" })
  return await req.json()
}

const UpdateCarsPage = async ({ searchParams }) => {
  return (
  <>
    <div className="flex flex-col md:flex-row items-center justify-between gap-2 py-10 px-3">
      <div className="">
        <h1 className="text-2xl font-bold">{searchParams?.detail ? `Detail Car data` : "Update Car Data"}</h1>
        <BreadCrumb />
      </div>
    </div>

    <Card className="p-5 min-h-fit overflow-x-auto">
      <UpdateForm />
    </Card>
  </>
  )
}

export const generateMetadata = async ({ params, searchParams }) => {
  const data = await getCarByID(params.id)

  return {
    title: searchParams?.detail ? `Detail "${data?.car.name}"` : `Update "${data?.car.name}"` 
  }
}

export default UpdateCarsPage