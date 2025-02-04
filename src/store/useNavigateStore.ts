import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type NavigateStore = {
  navigatePage: string;
  setNavigatePage: (page: string) => void;
};

const useNavigateStore = create<NavigateStore>()(
  persist(
    (set) => ({
      navigatePage: "/",
      setNavigatePage: (page) => set({ navigatePage: page }),
    }),
    {
      name: "navigate-page",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useNavigateStore;
