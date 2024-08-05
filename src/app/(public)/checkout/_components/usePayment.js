import { create } from "zustand";

const initialPayment = {
   paymentProvider: null,
   noRek: null,
   totalAmount: null
}

export const usePayment = create((set) => ({
   payment: initialPayment,
   setPaymentProvider: (value) =>
      set((state) => ({ payment: { ...state.payment, paymentProvider: value } })),
   setTotalAmount: (value) =>
      set((state) => ({ payment: { ...state.payment, totalAmount: value } })),
   setNoRek: (value) =>
      set((state) => ({ payment: { ...state.payment, noRek: value } }))
}))
