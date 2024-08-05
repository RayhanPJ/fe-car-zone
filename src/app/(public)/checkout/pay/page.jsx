
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import PayCard from "./_components/PayCard"
import PaySuccess from "./_components/PaySuccess"

export const metadata ={
   title : "Pay - Carzone"
}

const PayPage = () => {

  return (
   <>
   <div className="main-container mt-20">
      {/* <h1 className="text-4xl font-bold">Confirm Payment</h1> */}

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