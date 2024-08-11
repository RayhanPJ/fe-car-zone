import React from "react";
import MyOrder from "./_components/MyOrder";

export const metadata = {
  title: "My transaction history - carzone",
};

const MyOrderPage = () => {
  return (
    <section className="flex flex-col gap-6 w-full min-h-100%">
      <h1 className="text-3xl font-bold">My Order</h1>
      <MyOrder />
    </section>
  );
};

export default MyOrderPage;
