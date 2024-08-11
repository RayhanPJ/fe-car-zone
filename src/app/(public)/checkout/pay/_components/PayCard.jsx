"use client";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { usePayment } from "../../_components/usePayment";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { UploadIcon } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Copy, Check, Landmark } from "lucide-react";
import formatCurrency from "@/lib/currencyFormat";
import { useForm } from "react-hook-form";
import API from "@/api";
import useImageUploader from "@/hooks/useImageUploader";
import { Progress } from "@/components/ui/progress";
import Swal from "sweetalert2";

const PayCard = () => {
  const { payment, setPaymentProof, clear } = usePayment();
  const { copiedText, copy } = useCopyToClipboard();
  const router = useRouter();
  const [isPaid, setIsPaid] = useState(false);
  const {
    inputFileRef,
    handleFileInputChange,
    progressPercent,
    imgUrl,
    error,
  } = useImageUploader();

  useEffect(() => {
    if (!payment.noRek || !payment.paymentProvider || !payment.totalAmount) {
      router.push("/cars");
    }

    // console.log(payment)
  }, [payment]);

  useEffect(() => {
    if (isPaid) {
      clear();
    }
  }, [isPaid]);

  useEffect(() => {
    if (imgUrl) {
      setPaymentProof(imgUrl);
    }
  }, [progressPercent, imgUrl]);

  if (!payment.noRek || !payment.paymentProvider || !payment.totalAmount) {
    return (
      <>
        <Card className="p-5">Payment information not found!</Card>
      </>
    );
  }

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const onSubmit = () => {
    API.post("/api/cms/orders", {
      car_id: payment.carID,
      status: false,
      total_price: payment.totalAmount,
      order_image: payment.paymentProof,
    })
      .then((order) => {
        const orderId = order.data?.data.id;
        if (!orderId) {
          throw new Error("Order ID is not available");
        }
        API.post("/api/cms/transactions", {
          order_id: orderId,
          payment_provider: payment.paymentProvider,
          no_rek: payment.noRek,
          amount: payment.totalAmount,
        })
          .then((tsc) => console.log(tsc))
          .catch((err) => {
            console.error(err);
          });

        Swal.fire({
          title: "Order placed!",
          text: "Please wait until your order is confirmed by admin",
          icon: "success",
        });

        window.location.href = "/my-order";
      })
      .catch((err) => {
        Swal.fire({
          title: "Order failed!",
          text: "Your transaction is failed, please try again!",
          icon: "error",
        });
        console.error(err);
      });
  };

  return (
    <>
      <div className="mt-10 flex flex-col gap-3">
        <div className="my-3">
          <Label className="mb-3">Payment provider</Label>
          <div className="flex items-center gap-2 border border-secondary p-1 rounded-md">
            <Card className="p-2">
              <Landmark />
            </Card>
            <span>{payment.paymentProvider}</span>
          </div>
        </div>
        <div className="">
          <Label className="mb-3">
            Bank account number (CarZone Indonesia)
          </Label>
          <div className="flex items-center gap-2  border border-secondary p-1 rounded-md justify-between px-2">
            <span>{payment.noRek}</span>
            <Button onClick={() => copy(payment.noRek)}>
              {copiedText == payment.noRek ? <Check /> : <Copy />}{" "}
            </Button>
          </div>
        </div>
        <div className="">
          <Label className="mb-3">Total</Label>
          <div className="flex justify-between px-2 items-center gap-2  border border-secondary p-1 rounded-md">
            <span>{formatCurrency(payment.totalAmount)}</span>
            <Button onClick={() => copy(payment.totalAmount)}>
              {copiedText == payment.totalAmount ? <Check /> : <Copy />}{" "}
            </Button>
          </div>
        </div>
      </div>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="my-3">
          <span>Upload transfer proof</span>
          <label
            htmlFor="proof-payment"
            className="mt-4 grid gap-4 cursor-pointer"
          >
            <div className="flex py-10 items-center justify-center rounded-md border-2 border-dashed border-muted transition-colors hover:border-primary">
              <div className="text-center">
                {!imgUrl ? (
                  <>
                    <UploadIcon className="mx-auto h-12 w-12 text-muted-foreground" />
                    <div className="mt-4 font-medium text-muted-foreground">
                      Click to select image
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-full max-w-xl h-full max-h-max">
                      <img src={imgUrl} width={300} height={500} />
                      <div className="mt-4 font-medium text-muted-foreground">
                        Click to change
                      </div>
                    </div>
                  </>
                )}
                {progressPercent > 0 && progressPercent != 100 && (
                  <Progress value={progressPercent} />
                )}
                <Input
                  // {...form.register("image_car")}
                  id="proof-payment"
                  ref={inputFileRef}
                  onChange={handleFileInputChange}
                  type="file"
                  accept="image/*"
                  className="sr-only"
                />
              </div>
            </div>
          </label>
        </div>

        {payment.paymentProof && (
          <Button className="my-10" disabled={isSubmitting}>
            {isSubmitting ? "Loading" : "Send payment confirmation"}
          </Button>
        )}
      </form>
    </>
  );
};

export default PayCard;
