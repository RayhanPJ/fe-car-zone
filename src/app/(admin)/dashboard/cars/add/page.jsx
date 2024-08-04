import BreadCrumb from "@/components/common/BreadCrumb"
import AddForm from "./_components/AddForm"
import { BackButton } from "@/components/common/BackButton"
import { Card } from "@/components/ui/card"

export const metadata = {
   title: "Add Car | Dashboard Carzone"
}




const AddCarsPage = () => {
  return (
  <>
    <div className="flex flex-col md:flex-row items-center justify-between gap-2 py-10 px-3">
      <div className="">
        <h1 className="text-2xl font-bold">Add New Car Data</h1>
        <BreadCrumb />
      </div>
    </div>

    <Card className="p-5 min-h-fit overflow-x-auto">
      <AddForm />
    </Card>
  </>
  )
}

export default AddCarsPage