
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import PayCard from "./_components/PayCard"
import { Breadcrumb, BreadcrumbItem, BreadcrumbSeparator, BreadcrumbList } from "@/components/ui/breadcrumb"
import Link from "next/link"

export const metadata ={
   title : "Pay - Carzone"
}

const PayPage = () => {

  return (
   <>
   <div className="main-container mt-20">
      {/* <h1 className="text-4xl font-bold">Confirm Payment</h1> */}
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link href="/checkout" className="font-bold text-primary"> 
              <span className=" py-1 px-3 border border-primary rounded-full mr-2">1</span> Payment method</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
          <Link href="/checkout/pay" className="font-bold text-primary"> 
          <span className="py-1 px-3 border border-primary rounded-full mr-2">2</span> Pay</Link>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="mt-10">
        <div className="flex flex-col gap-2">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="mb-3">Confirm your payment</CardTitle>
              <p>Confirm your payment by transfering to our bank account</p>
            </CardHeader>

            <CardContent className="flex flex-col gap-2">
               <PayCard />
            </CardContent>
          </Card>
        </div>
    </div>
    </div>
   </>
  )
}

export default PayPage