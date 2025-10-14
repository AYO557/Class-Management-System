import { create } from "zustand";
import type { AuthState } from "../libs/types";

const useAuthStore = create<AuthState>((set) => ({
  userData: null,
  setUserData: (userData) => set({ userData }),
}));

export default useAuthStore;
