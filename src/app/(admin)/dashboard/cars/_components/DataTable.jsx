"use client"
import { Table, TableBody, TableCell, TableHeader, TableRow, TableCaption } from "@/components/ui/table"
import { Eye, Pencil, Ellipsis } from "lucide-react"
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
import useSWR from "swr"
import { fetcher } from "@/api"
import { API_BASE_URL } from "@/constants/variables"
import { Spinner } from "@/components/common/Spinner"


const DataTable = () => {
  const { data, isLoading, mutate } = useSWR(API_BASE_URL + "/api/cms/cars", fetcher)
  
  return (
  <>
    <Table className="w-full">
      <TableCaption>List of cars data</TableCaption>
      <TableHeader>
        <TableRow className="text-center">
          <TableCell>No</TableCell>
          <TableCell>Model</TableCell>
          <TableCell>Brand</TableCell>
          <TableCell>Condition</TableCell>
          <TableCell>Options</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {isLoading && <TableRow><TableCell colSpan={6}><Spinner /></TableCell></TableRow> }
        {!isLoading && data?.cars.map((car, i) => (
          <TableRow className="text-center" key={car.ID}>
            <TableCell>{i+1}</TableCell>
            <TableCell>{car.name}</TableCell>
            <TableCell>{car.brand.name}</TableCell>
            <TableCell>{
              car.is_second 
              ? <Badge variant={"success"}>New</Badge> 
              : <Badge variant={"outline"}>Second</Badge> }
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
                    <Link className="flex w-full items-center gap-2" href={`/dashboard/cars/${car.id}?detail=true`}>
                      <Eye className="size-4" />
                      <span>Detail</span>
                    </Link>
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
                <DeleteCar id={car.id} mutate={mutate} />
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