import { create } from "zustand";

type AuthStore = {
  isLogin: boolean;
  setIsLogin: (loginStatus: boolean) => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
  isLogin: false,
  setIsLogin: (loginStatus) => set({ isLogin: loginStatus }),
}));
