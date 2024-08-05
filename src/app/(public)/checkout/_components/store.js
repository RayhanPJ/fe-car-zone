import { create } from "zustand";

const initialPayment = {
   paymentProvider: null,
   totalAmount: null
}

export const usePayment = create(set => ({
   payment: initialPayment,
   setPaymentProvider : (value) => set({payment: { paymentProvider: value }}),
   setTotalAmout : (value) => set({payment: { totalAmout: value }})
}))