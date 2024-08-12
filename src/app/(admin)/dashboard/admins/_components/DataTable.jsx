"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  TableCaption,
} from "@/components/ui/table";
// import DeleteUser from "./DeleteUser";
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

  // const handleDeleteSuccess = (adminId) => {
  //   setData((prevData) => prevData.filter((admin) => admin.id !== adminId));
  // };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Table className="w-full">
        <TableCaption>List of admins</TableCaption>
        <TableHeader>
          <TableRow className="text-center">
            <TableCell>No</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Role</TableCell>
            {/* <TableCell>Action</TableCell> */}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data
            ?.filter((i) => i.role == "admin")
            .map((admin, i) => (
              <TableRow className="text-center" key={admin.id}>
                <TableCell>{i + 1}</TableCell>
                <TableCell>{admin.username}</TableCell>
                <TableCell>{admin.email}</TableCell>
                <TableCell>{admin.role}</TableCell>
                {/* <TableCell>
                <div className="flex items-center gap-2 justify-center">
                  <DeleteUser
                    userId={admin.id}
                    onDeleteSuccess={handleDeleteSuccess}
                  />
                </div>
              </TableCell> */}
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </>
  );
};

export default DataTable;
