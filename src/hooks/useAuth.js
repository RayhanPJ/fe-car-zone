import { AUTH_KEY } from "@/constants/variables";
import { create } from "zustand";
import { persist } from "zustand/middleware"

const initial = {
   token: null,
   username: null,
   email: null,
   role: null,
}

export const useAuth = create(persist(
   (set) => ({
      auth: initial,
      setToken: value => set((state) => ({ auth: { ...state.auth, token: value } })),
      setUsername: value => set((state) => ({ auth: { ...state.auth, username: value } })),
      setRole: value => set((state) => ({ auth: { ...state.auth, role: value } })),
      setEmail: value => set((state) => ({ auth: { ...state.auth, email: value } })),
      clear: () => set({ auth: initial })
   }),
   {
      name : AUTH_KEY,
   }
))