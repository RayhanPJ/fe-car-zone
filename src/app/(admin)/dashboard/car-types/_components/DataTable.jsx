"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  TableCaption,
} from "@/components/ui/table";
import { Pencil } from "lucide-react";
import Link from "next/link";
import DeleteCarType from "./DeleteCarType";
import useSWR from "swr";
import { fetcher } from "@/api";
import { API_BASE_URL } from "@/constants/variables";
import { Spinner } from "@/components/common/Spinner";

const DataTable = () => {
  const { data, isLoading, mutate } = useSWR(
    API_BASE_URL + "/api/cms/type-cars",
    fetcher
  );
  console.log(data);

  return (
    <>
      <Table className="w-full">
        <TableCaption>List of cars data</TableCaption>
        <TableHeader>
          <TableRow className="text-center">
            <TableCell>No</TableCell>
            <TableCell>Car Types</TableCell>
            <TableCell>Actions</TableCell>
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
            data?.map((carType, i) => (
              <TableRow className="text-center" key={carType.ID}>
                <TableCell>{i + 1}</TableCell>
                <TableCell>{carType.name}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2 justify-center">
                    <Link
                      href={`/dashboard/car-types/${carType.ID}`}
                      className="btn btn-success"
                    >
                      <Pencil className="size-4" />
                    </Link>
                    <DeleteCarType id={carType.ID} mutate={mutate} />
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
