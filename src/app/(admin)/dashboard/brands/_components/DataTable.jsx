"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  TableCaption,
} from "@/components/ui/table";
import { Eye, Trash2, Pencil, Ellipsis } from "lucide-react";
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
import DeleteBrand from "./DeleteBrand";
import useSWR from "swr";
import { API_BASE_URL } from "@/constants/variables";
import { fetcher } from "@/api";
import { Spinner } from "@nextui-org/react";

const DataTable = () => {
  const { data, isLoading, mutate } = useSWR(
    API_BASE_URL + "/api/cms/brand-cars",
    fetcher
  );

  return (
    <Table className="w-full">
      <TableCaption>List of brands data</TableCaption>
      <TableHeader>
        <TableRow className="text-center">
          <TableCell>No</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Options</TableCell>
          <TableCell>Action</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {isLoading && (
          <TableRow>
            <TableCell colSpan={6}>
              <Spinner />
            </TableCell>
          </TableRow>
        )}
        {!isLoading &&
          data.map((brand, i) => (
            <TableRow className="text-center" key={brand.id}>
              <TableCell>{i + 1}</TableCell>
              <TableCell>{brand.name}</TableCell>
              <TableCell className="flex items-center gap-2 justify-center">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost">
                      <Ellipsis />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Action to this cell</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Link
                        className="flex w-full items-center gap-2"
                        href={`/dashboard/brands/${brand.id}?detail=true`}
                      >
                        <Eye className="size-4" />
                        <span>Detail</span>
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2 justify-center">
                  <Link
                    href={`/dashboard/brands/${brand.id}`}
                    className="btn btn-success"
                  >
                    <Pencil className="size-4" />
                  </Link>
                  <DeleteBrand brandId={brand.id} mutate={mutate} />
                </div>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};

export default DataTable;
