import { create } from "zustand";

export const useSidebar = create((set) => ({
  isMinimized: true,
  toggle: () => set((state) => ({ isMinimized: !state.isMinimized })),
}));
