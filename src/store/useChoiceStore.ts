import { create } from 'zustand';

type ChoiceStore = {
  selectedImage: string | null;
  setSelectedImage: (image: string | null) => void;
}

export const useChoiceStore = create<ChoiceStore>((set) => ({
  selectedImage: null,
  setSelectedImage: (image) => set({ selectedImage: image }), 
}));
