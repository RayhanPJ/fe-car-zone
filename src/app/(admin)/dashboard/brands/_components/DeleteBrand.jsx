"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import API from "@/api";
import { useRouter } from "next/navigation";

const DeleteBrand = ({ brandId, mutate }) => {
  const { toast } = useToast();
  const router = useRouter();

  const handleClick = () => {
    API.delete(`/api/cms/brand-cars/${brandId}`)
      .then(() => {
        toast({
          title: `Brand deleted successfully`,
          variant: "success",
        });
        mutate(); // Refresh data setelah penghapusan
        router.replace("/dashboard/brands");
      })
      .catch((error) => {
        toast({
          title: `Failed to delete brand data`,
          variant: "destructive",
        });
        console.error(error);
      });
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">
          <Trash2 />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the brand
            data.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleClick}
            className="btn btn-destructive hover:bg-destructive/80"
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteBrand;
