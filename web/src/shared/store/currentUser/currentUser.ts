import { create } from "zustand/react";

export type User = {
  id: string;
  firstname: string;
  lastname: string;
};

type Store = {
  user: User | null;
  setUserInfo: (user: User) => void;
};

export const currentUserStore = create<Store>((set) => ({
  user: null,
  setUserInfo: (payload) => set(() => ({ user: payload })),
}));
