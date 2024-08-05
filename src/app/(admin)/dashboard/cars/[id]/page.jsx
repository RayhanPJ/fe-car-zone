import BreadCrumb from "@/components/common/BreadCrumb"
import UpdateForm from "./_components/UpdateForm"
import { Card } from "@/components/ui/card"

export const metadata = {
   title: "Update Car | Dashboard Carzone"
}




const UpdateCarsPage = () => {
  return (
  <>
    <div className="flex flex-col md:flex-row items-center justify-between gap-2 py-10 px-3">
      <div className="">
        <h1 className="text-2xl font-bold">Update Car Data</h1>
        <BreadCrumb />
      </div>
    </div>

    <Card className="p-5 min-h-fit overflow-x-auto">
      <UpdateForm />
    </Card>
  </>
  )
}

export default UpdateCarsPage