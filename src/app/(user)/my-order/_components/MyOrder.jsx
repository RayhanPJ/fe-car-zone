"use client";
import useSWR from "swr";
import API, { fetcher } from "@/api";
import { useAuth } from "@/hooks/useAuth";
import { Spinner } from "@/components/common/Spinner";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { timeAgo } from "@/lib/utils";
import { useCallback } from "react";
import Swal from "sweetalert2";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const MyOrder = () => {
  const { auth } = useAuth();
  const { data: orders, isLoading } = useSWR(
    "/api/cms/orders/" + auth.userId,
    fetcher,
    { revalidateOnFocus: true }
  );

  const showImage = useCallback((img) => {
    Swal.fire({
      imageUrl: img,
      showConfirmButton: false,
      background: "transparent",
      showCloseButton: true,
    });
  }, []);

  const showDetail = useCallback(async (orderId) => {
    try {
      Swal.fire({
        title: "Processing...",
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });

      const res = await API.get(`/api/cms/transactions/${orderId}`);
      Swal.close();

      // Show success SweetAlert
      Swal.fire({
        title: "Success!",
        text: "Data retrieved successfully",
        icon: "success",
      });
    } catch (error) {
      Swal.close();
      Swal.fire({
        title: "Error!",
        text: "Something went wrong!",
        icon: "error",
      });
      console.error("Error:", error);
    }
  }, []);

  if (isLoading)
    return (
      <div className="mx-auto">
        <Spinner />
      </div>
    );

  return (
    <>
      {orders?.data.map((item) => (
        <Card key={item.id} className="p-5">
          <CardHeader className="flex items-center justify-between flex-row">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="text-left">
                  <span>{timeAgo(item.created_at)}</span>
                </TooltipTrigger>
                <TooltipContent className="text-left">
                  <p>{new Date(item.created_at).toLocaleString()}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            {item.status ? (
              <Badge>Success</Badge>
            ) : (
              <Badge variant={"destructive"}>Pending</Badge>
            )}
          </CardHeader>
          <CardContent className="flex justify-between items-center">
            <Button
              variant={"outline"}
              onClick={() => showImage(item.order_image)}
            >
              View Proof
            </Button>
            <Button onClick={() => showDetail(item.id)}>Details</Button>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default MyOrder;
