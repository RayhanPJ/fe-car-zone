"use client"
import { Table, TableBody, TableCell, TableHeader, TableRow, TableCaption } from "@/components/ui/table"
import { Eye, Trash2, Pencil, Ellipsis } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import DeleteCar from "./DeleteCar"

const carData = [
  { id: 1, model: "Corolla", status:  true, brand: "Toyota" },
  { id: 2, model: "Civic", status:  true, brand: "Honda" },
  { id: 3, model: "Mustang", status:  false, brand: "Ford" },
  { id: 4, model: "Camaro", status:  true, brand: "Chevrolet" },
  { id: 5, model: "Altima", status:  false, brand: "Nissan" },
  { id: 6, model: "Accord", status:  true, brand: "Honda" },
  { id: 7, model: "Focus", status:  true, brand: "Ford" },
  { id: 8, model: "Impala", status:  true, brand: "Chevrolet" },
  { id: 9, model: "Sentra", status:  false, brand: "Nissan" },
  { id: 10, model: "Prius", status:  true, brand: "Toyota" }
]

const DataTable = () => {
  return (
  <>
    <Table className="w-full">
      <TableCaption>List of cars data</TableCaption>
      <TableHeader>
        <TableRow className="text-center">
          <TableCell>No</TableCell>
          <TableCell>Model</TableCell>
          <TableCell>Brand</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Options</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {carData.map((car, i) => (
          <TableRow className="text-center" key={car.id}>
            <TableCell>{i+1}</TableCell>
            <TableCell>{car.model}</TableCell>
            <TableCell>{car.brand}</TableCell>
            <TableCell>{
              car.status 
              ? <Badge variant={"success"}>Available</Badge> 
              : <Badge variant={"destructive"}>Sold</Badge> }
            </TableCell>
            <TableCell className="flex items-center gap-2 justify-center">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost"><Ellipsis /> </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>Action to this cell</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <button className="flex w-full items-center gap-2">
                      <Eye className="size-4" />
                      <span>Detail</span>
                    </button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2 justify-center">
                <Link href={`/dashboard/cars/${car.id}`} 
                  className="btn btn-success">
                  <Pencil className="size-4" />
                </Link>
                <DeleteCar />
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </>
  )
}

export default DataTable