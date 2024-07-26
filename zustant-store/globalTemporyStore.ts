import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface tempState {
  isCartBarOpen: boolean;
  setIsCartBarOpen: (value: boolean) => void;
}

export const useGlobalTempState = create<tempState>((set) => ({
  isCartBarOpen: false,
  setIsCartBarOpen: (value: boolean) =>
    set((state) => ({
      isCartBarOpen: value,
    })),
}));
