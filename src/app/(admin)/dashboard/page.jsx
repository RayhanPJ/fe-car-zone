import { Card, CardHeader, CardDescription, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell, TableFooter } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import OverviewChart from "./_components/OverviewChart"

export const metadata = {
  title: "Overview - dashboard carzone"
}

const orders = [
  {
    order: "INV001",
    customer: "salman",
    date: "2024-06-23",
    amount: "IDR. 120M",
    status: "Not paid",
    statusVariant: "destructive"
  },
  {
    order: "INV002",
    customer: "rifki",
    date: "2024-06-24",
    amount: "IDR. 120M",
    status: "paid",
    statusVariant: "success"
  },
  {
    order: "INV003",
    customer: "rayhan",
    date: "2024-06-25",
    amount: "IDR. 120M",
    status: "paid",
    statusVariant: "success"
  },
  {
    order: "INV004",
    customer: "afif",
    date: "2024-06-26",
    amount: "IDR. 120M",
    status: "paid",
    statusVariant: "success"
  }
];


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
      <Card>
        <CardHeader className="pb-2">
          <CardDescription>Available Cars</CardDescription>
          <CardTitle className="text-4xl">12 units</CardTitle>
        </CardHeader>
        <CardFooter className="mt-6">
          <Link className="btn btn-outline" href="/dashboard/cars">View Table</Link>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <CardDescription>Customers</CardDescription>
          <CardTitle className="text-4xl">+54</CardTitle>
        </CardHeader>
        <CardFooter className="mt-6">
          <Link className="btn btn-outline" href="/dashboard/users">View Table</Link>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <CardDescription>Brands</CardDescription>
          <CardTitle className="text-4xl">4 brands</CardTitle>
        </CardHeader>
        <CardFooter className="mt-6">
          <Link className="btn btn-outline" href="/dashboard/brands">View Table</Link>
        </CardFooter>
      </Card>
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
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((item, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium">{item.order}</TableCell>
                  <TableCell>{item.customer}</TableCell>
                  <TableCell>{item.date}</TableCell>
                  <TableCell>{item.amount}</TableCell>
                  <TableCell>
                    <Badge variant={item.statusVariant}>{item.status}</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  </main>
</>
  )
}

export default DashboardPage
