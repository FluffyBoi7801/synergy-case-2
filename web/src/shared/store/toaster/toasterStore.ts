import { create } from "zustand/react";
import { v4 as uuid } from "uuid";
import { ToastType } from "@/shared/ui/Toaster/components";

type Toast = {
  id: string;
  type: ToastType;
  text: string;
};

type Store = {
  toasts: Toast[];
  addToast: (toast: Pick<Toast, "type" | "text">) => void;
  removeToast: (id: string) => void;
};

export const toasterStore = create<Store>((set) => ({
  toasts: [],
  addToast: (payload) =>
    set((state) => ({ toasts: [...state.toasts, { id: uuid(), ...payload }] })),
  removeToast: (payload) =>
    set((state) => ({
      toasts: state.toasts.filter((toast) => toast.id !== payload),
    })),
}));
