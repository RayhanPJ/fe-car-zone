import { Card, CardHeader, CardDescription, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import Link from "next/link"
import OverviewChart from "./_components/OverviewChart"
import OrdersTable from "./_components/OrdersTable"
import { CarsOverview, UsersOverview, BrandsOverview } from "./_components/OverviewCards"

export const metadata = {
  title: "Overview - dashboard carzone"
}

const DashboardPage = () => {
  return (
<>
  <h1 className="text-4xl font-bold my-10">Overview</h1>
  <main className="grid flex-1 items-start gap-4 sm:py-0 md:gap-8">
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <Card>
        <CardHeader className="pb-2">
          <CardDescription>Income this month</CardDescription>
          <CardTitle className="text-4xl">IDR. 984M</CardTitle>
        </CardHeader>
      </Card>
      <CarsOverview />
      <UsersOverview />
      <BrandsOverview />
    </div>
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <div className="col-span-2 md:col-span-3 lg:col-span-2">
        <OverviewChart />
      </div>
      <Card className="col-span-2">
        <CardHeader className="pb-5 flex justify-between flex-row items-end">
          <div className="">
            <CardTitle>Recent Orders</CardTitle>
            <CardDescription>Latest orders from customers</CardDescription>
          </div>
          <div className="">
            <Link className="btn btn-outline max-w-fit" href={"/dashboard/transactions"}>
              View Table
            </Link>
          </div>
        </CardHeader>
        <CardContent>
          <OrdersTable />
        </CardContent>
      </Card>
    </div>
  </main>
</>
  )
}

export default DashboardPage
