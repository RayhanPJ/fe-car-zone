const data = [
  {
    id: 1,
    user_id: 1,
    invoice_no: "INV-001",
    buyer: "Salman Wiharja",
    date: "31 July 2024",
    status: "Checking",
    bank: "BCA",
    proof_of_transaction: "/static/transaction-dummy.jpeg",
    total: 4000000000,
    contact: {
      name: "Salman Wiharja",
      number: "08123456789",
      address: "Jl. Memanusiakan Manusia No. 123, Jakarta",
    },
    product: {
      id: 1,
      image: "/static/gtr.png",
      brand: "Nissan",
      model: "GT-R NISMO®",
      variant: "ATTESA E-TS® All-Wheel Drive",
      color: "Black",
      quantity: 1,
      price: 4000000000,
    },
    shipping: {
      cost: 1000000,
      insurance: 500000,
    },
  },
];

export default data;
