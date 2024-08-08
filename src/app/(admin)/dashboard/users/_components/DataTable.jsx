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
import DeleteUser from "./DeleteUser";

const DataTable = () => {
  const data = [
    {
      id: 4,
      username: "user1",
      phone_number: "",
      address: "",
      email: "user1@gmail.com",
      role: "user",
    },
    {
      id: 3,
      username: "admin1",
      phone_number: "",
      address: "",
      email: "admin1@gmail.com",
      role: "admin",
    },
    {
      id: 5,
      username: "rifki",
      phone_number: "",
      address: "",
      email: "rifki@test.com",
      role: "user",
    },
    {
      id: 15,
      username: "test1",
      phone_number: "",
      address: "",
      email: "test@tes.com",
      role: "user",
    },
    {
      id: 16,
      username: "test2",
      phone_number: "",
      address: "",
      email: "test2@tes.com",
      role: "user",
    },
    {
      id: 12,
      username: "tester",
      phone_number: "088726837246",
      address: "jalan jalan sore",
      email: "teste@gmail.com",
      role: "user",
    },
  ];

  return (
    <>
      <Table className="w-full">
        <TableCaption>List of transaction data</TableCaption>
        <TableHeader>
          <TableRow className="text-center">
            <TableCell>No</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone Number</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((user, i) => (
            <TableRow className="text-center" key={user.id}>
              <TableCell>{i + 1}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone_number}</TableCell>
              <TableCell>{user.address}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2 justify-center">
                  <Link
                    href={`/dashboard/cars/${user.id}`}
                    className="btn btn-success"
                  >
                    <Pencil className="size-4" />
                  </Link>
                  <DeleteUser />
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
