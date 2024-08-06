import { create } from "zustand";

const initialPayment = {
   carID: null,
   paymentProvider: null,
   noRek: null,
   totalAmount: null,
   paymentProof: null
}

export const usePayment = create((set) => ({
   payment: initialPayment,
   setPaymentProvider: (value) =>
      set((state) => ({ payment: { ...state.payment, paymentProvider: value } })),
   setCarID: (value) =>
      set((state) => ({ payment: { ...state.payment, carID: value } })),
   setTotalAmount: (value) =>
      set((state) => ({ payment: { ...state.payment, totalAmount: value } })),
   setNoRek: (value) =>
      set((state) => ({ payment: { ...state.payment, noRek: value } })),
   setPaymentProof: (value) =>
      set((state) => ({ payment: { ...state.payment, paymentProof: value } }))
}))
