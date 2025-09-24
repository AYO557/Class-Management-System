import { create } from "zustand";
import type { AuthState } from "../libs/types";

const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));

export default useAuthStore;
