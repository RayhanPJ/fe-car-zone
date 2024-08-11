"use client"
 import { Button } from "@/components/ui/button"
 import API from "@/api"
 import Swal from "sweetalert2"
 import { Trash2 } from "lucide-react"

const DeleteCar = ({ id, mutate }) => {


   const handleDelete = () => {
      API.delete("/api/cms/cars/"+id)
         .then(() => { 
            Swal.fire({
               title: "Deleted!",
               text: "Car data has been deleted.",
               icon: "success"
             })
             mutate()
         })
         .catch((err) => {
            Swal.fire({
               title: "Failed!",
               text: "Car data failed to delete.",
               icon: "error"
             })
            console.error(err)
         })
   }

   const onSubmit = (e) => {
      e.preventDefault()
      Swal.fire({
         title: "Are you sure?",
         text: "You won't be able to revert this!",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, delete it!"
       }).then(async (result) => {
         if (result.isConfirmed) {
            handleDelete()
         }
       })
   }

  return (
   <>
      <form onSubmit={onSubmit}>
         <Button 
            variant="destructive"
            type="submit"><Trash2 /> </Button>
      </form>
      {/* <AlertDialog>
         <AlertDialogTrigger asChild>
            <Button variant="destructive"> <Trash2 /> </Button>
         </AlertDialogTrigger>
         <AlertDialogContent>
            <AlertDialogHeader>
               <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
               <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete the car data.
               </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
               <AlertDialogCancel>Cancel</AlertDialogCancel>
               <AlertDialog>
                  <form onSubmit={onSubmit}>
                     <Button 
                        variant="destructive"
                        type="submit">Delete</Button>
                  </form>
               </AlertDialog>
            </AlertDialogFooter>
         </AlertDialogContent>
      </AlertDialog> */}
   </>
  )
}

export default DeleteCar