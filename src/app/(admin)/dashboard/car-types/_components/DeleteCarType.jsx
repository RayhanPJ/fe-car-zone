"use client";
import { Button } from "@/components/ui/button";
import API from "@/api";
import Swal from "sweetalert2";

const DeleteCarType = ({ id, mutate }) => {
  const handleDelete = async () => {
    try {
      await API.delete("/api/cms/type-cars/" + id);
      Swal.fire({
        title: "Deleted!",
        text: "Car Type data has been deleted.",
        icon: "success",
      });
      mutate();
    } catch (err) {
      Swal.fire({
        title: "Failed!",
        text: "Car Type data failed to delete.",
        icon: "error",
      });
      console.error(err);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        handleDelete();
      }
    });
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <Button variant="destructive" type="submit">
          Delete
        </Button>
      </form>
    </>
  );
};

export default DeleteCarType;
