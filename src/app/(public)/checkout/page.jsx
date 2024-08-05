import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card";
import { BackButton } from "@/components/common/BackButton";
import BreadCrumb from "@/components/common/BreadCrumb";

import PaymentForm from "./_components/PaymentForm";
import CarDetail from "./_components/CarDetail";
import PaymentDetail from "./_components/PaymentDetail";

export const metadata = {
  title: "Checkout - CarZone",
};

const CheckoutPage = () => {
  return (
    <>
      <div className="bg-secondary py-10">
        <div className="main-container">
          <h1 className="text-3xl font-bold">Checkout</h1>
          <BreadCrumb className={"mt-5"} />
        </div>
      </div>

      <div className="main-container mt-20">
        <h1 className="text-4xl font-bold">Payment Details</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
          <div className="flex flex-col gap-2">
            <Card>
              <CardHeader>
                <CardTitle className="mb-3">Choose payment menthod</CardTitle>
                <p>
                  You can use payment using, mobile banking, bank transfer and
                  internet banking.
                </p>
              </CardHeader>

              <CardContent className="flex flex-col gap-2">
                <PaymentForm />
              </CardContent>
            </Card>
          </div>
          <div className="">
            <Card>
              <CarDetail />
              <PaymentDetail />
            </Card>
          </div>
        </div>
        <BackButton className={"my-10"} />
      </div>
    </>
  );
};

export default CheckoutPage;
