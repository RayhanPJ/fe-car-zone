"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  TableCaption,
} from "@/components/ui/table";
import { Eye, Ellipsis, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import DeclineTransaction from "./DeclineTransaction";
import data from "@/constants/dataDummy.js";

const DataTable = () => {
  return (
    <>
      <Table className="w-full">
        <TableCaption>List of transaction data</TableCaption>
        <TableHeader>
          <TableRow className="text-center">
            <TableCell>No</TableCell>
            <TableCell>Model</TableCell>
            <TableCell>Brand</TableCell>
            <TableCell>Variant</TableCell>
            <TableCell>Color</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Options</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((transaction, i) => (
            <TableRow className="text-center" key={transaction.id}>
              <TableCell>{i + 1}</TableCell>
              <TableCell>{transaction.product.model}</TableCell>
              <TableCell>{transaction.product.brand}</TableCell>
              <TableCell>{transaction.product.variant}</TableCell>
              <TableCell>{transaction.product.color}</TableCell>
              <TableCell>
                {transaction.status ? (
                  <Badge variant={"success"}>Accepted</Badge>
                ) : (
                  <Badge variant={"destructive"}>Checking</Badge>
                )}
              </TableCell>
              <TableCell className="h-full items-center gap-2 justify-center">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost">
                      <Ellipsis />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Action to this cell</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <Link href={`/dashboard/transactions/${transaction.id}`}>
                      <DropdownMenuItem>
                        <button className="flex w-full items-center gap-2">
                          <Eye className="size-4" />
                          <span>Detail</span>
                        </button>
                      </DropdownMenuItem>
                    </Link>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2 justify-center">
                  <Button
                    // Ini Ubah menjadi Handle Acc
                    onClick={() => console.log("clicked")}
                    className="btn btn-success hover:bg-green-600"
                  >
                    <Check className="size-4" />
                  </Button>
                  <DeclineTransaction />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default DataTable;
