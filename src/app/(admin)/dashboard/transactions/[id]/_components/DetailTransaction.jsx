import { BackButton } from "@/components/common/BackButton";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import data from "@/constants/dataDummy.js";
import formatCurrency from "@/lib/currencyFormat";
// import ModalImage from "./ModalImage";

const DetailTransaction = () => {
  // Dapatkan ID dari parameter URL, misalnya menggunakan useRouter jika ini adalah komponen Next.js
  // const router = useRouter();
  // const { id } = router.query; // Ambil ID dari URL
  // const transaction = data.find(d => d.id === parseInt(id)); // Cari transaksi berdasarkan ID

  const transaction = data[0]; // Sementara menggunakan data pertama untuk contoh

  if (!transaction) {
    return <p>Transaction not found</p>; // Tampilkan pesan ini jika transaksi tidak ditemukan
  }

  return (
    <section className="flex flex-col">
      <div className="flex justify-center">
        <Image
          src={transaction.product.image}
          alt={transaction.product.model}
          width={500}
          height={500}
          className="p-5 border rounded-md object-cover shadow-md"
        />
      </div>
      <Table className="mt-5">
        <TableHeader>
          <TableRow className="font-bold">
            <TableCell>Field</TableCell>
            <TableCell>Value</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Buyer</TableCell>
            <TableCell>{transaction.buyer}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Payment Date</TableCell>
            <TableCell>{transaction.date}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Bank</TableCell>
            <TableCell>{transaction.bank}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Brand</TableCell>
            <TableCell>{transaction.product.brand}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Model</TableCell>
            <TableCell>{transaction.product.model}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Variant</TableCell>
            <TableCell>{transaction.product.variant}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Color</TableCell>
            <TableCell>{transaction.product.color}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Quantity</TableCell>
            <TableCell>{transaction.product.quantity}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Total</TableCell>
            <TableCell>{formatCurrency(transaction.total)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div className="flex justify-center">
        <Image
          src={transaction.proof_of_transaction}
          alt="Transaction Image"
          width={500}
          height={500}
          className="rounded-lg object-cover shadow-md"
        />
        {/* <ModalImage
          src={transaction.proof_of_transaction}
          alt="Transaction Image"
          title={`${transaction.product.brand} ${transaction.product.model}`}
        /> */}
      </div>
      <div>
        <BackButton />
      </div>
    </section>
  );
};

export default DetailTransaction;
