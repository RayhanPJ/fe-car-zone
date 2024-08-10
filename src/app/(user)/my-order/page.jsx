import React from "react";
import OrderList from "./_components/OrderList";

export const metadata = {
  title: 'My transaction history - carzone'
}

const OrderListPage = () => {
  return (
    <section className="flex flex-col gap-6 w-full min-h-100%">
      <h1 className="text-3xl font-bold">ORDER LIST</h1>
      <OrderList />
    </section>
  );
};

export default OrderListPage;
