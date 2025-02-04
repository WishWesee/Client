import { create } from "zustand";

type ChoiceStore = {
  selectedImage: File | null;
  setSelectedImage: (image: File | null) => void;
};

export const useChoiceStore = create<ChoiceStore>((set) => ({
  selectedImage: null,
  setSelectedImage: (image) => set({ selectedImage: image }),
}));
