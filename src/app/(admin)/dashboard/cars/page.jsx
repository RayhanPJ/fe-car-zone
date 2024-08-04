import BreadCrumb from "@/components/common/BreadCrumb"
import Link from "next/link"
import DataTable from "./_components/DataTable"
import { Card } from "@/components/ui/card"

export const metadata = {
   title: "Cars | Dashboard Carzone"
}



const CarsDashboardPage = () => {
  return (
  <>
    <div className="flex items-center justify-between gap-2 py-10 px-3">
      <div className="">
        <h1 className="text-2xl font-bold">Cars</h1>
        <BreadCrumb />
      </div>

      <Link className="btn btn-default" href={"/dashboard/cars/add"}>
        Add New Car
      </Link>
    </div>

    
    <Card className="p-5 min-h-fit overflow-x-auto">
      <DataTable />
    </Card>
  </>
  )
}

export default CarsDashboardPage