"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  TableCaption,
} from "@/components/ui/table";
import DeleteUser from "./DeleteUser";
import { useEffect, useState } from "react";
import { fetcher } from "@/api";

const DataTable = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetcher("/api/cms/users");
        console.log(response.data);
        if (response && response.data && Array.isArray(response.data)) {
          setData(response.data);
        } else {
          console.error("Unexpected response format:", response);
        }
      } catch (error) {
        console.error("Failed to fetch data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDeleteSuccess = (userId) => {
    setData((prevData) => prevData.filter((user) => user.id !== userId));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Table className="w-full">
        <TableCaption>List of users</TableCaption>
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
          {data.filter(i => i.role == 'user').map((user, i) => (
            <TableRow className="text-center" key={user.id}>
              <TableCell>{i + 1}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone_number}</TableCell>
              <TableCell>{user.address}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2 justify-center">
                  <DeleteUser
                    userId={user.id}
                    onDeleteSuccess={handleDeleteSuccess}
                  />
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
