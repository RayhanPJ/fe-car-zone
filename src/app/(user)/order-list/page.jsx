import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import React from "react";
import data from "@/constants/dataDummy";
import formatCurrency from "@/lib/currencyFormat";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const OrderListPage = () => {
  return (
    <section className="flex flex-col gap-6 w-full min-h-100%">
      <h1 className="text-3xl font-bold">ORDER LIST</h1>
      {data.map(item => (
        <Card className="mr-5" key={item.id}>
          <div className="grid grid-cols-8">
            <div className="pt-6 pl-6 col-span-1 flex justify-center items-center">
              <Image
                className="rounded-xl"
                src="/logo.png"
                alt="car"
                width={100}
                height={100}
              />
            </div>
            <CardHeader className="col-span-3 xs:col-span-4 sm:col-span-5">
              <CardTitle>
                {item.brand} {item.model}
              </CardTitle>
              <CardDescription>
                {item.product.variant} | {item.product.color}
              </CardDescription>
            </CardHeader>

            <CardContent className="col-span-4 xs:col-span-3 sm:col-span-2">
              <div className="pt-6 flex flex-col items-center justify-center h-full">
                <p>Total Shipping</p>
                <p className="font-bold">{formatCurrency(item.total)}</p>
              </div>
            </CardContent>
          </div>
          <CardFooter className="pt-5 flex flex-row justify-end gap-3 w-full">
            <Link href={`/invoice/${item.id}`}>
              <Button>Detail Transaction</Button>
            </Link>
          </CardFooter>
        </Card>
      ))}

      {/* Pagination */}
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </section>
  );
};

export default OrderListPage;
