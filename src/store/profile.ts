import { create } from "zustand";

type ProfileState = {
  name: string;
  age: string;
  city: string;
  bio: string;
  intentionHaveFun: boolean;
  interests: string[];
  updateProfile: (updates: Partial<Omit<ProfileState, "updateProfile" | "setInterests">>) => void;
  setInterests: (interests: string[]) => void;
};

export const useProfileStore = create<ProfileState>((set) => ({
  name: "",
  age: "",
  city: "",
  bio: "",
  intentionHaveFun: false,
  interests: [],
  updateProfile: (updates) => set((state) => ({ ...state, ...updates })),
  setInterests: (interests) => set({ interests }),
}));
