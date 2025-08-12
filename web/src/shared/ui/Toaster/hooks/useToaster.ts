import { toasterStore } from "@/shared/store";

export const useToaster = () => {
  const toasts = toasterStore((state) => state.toasts);

  const addToast = toasterStore((state) => state.addToast);

  const removeToast = toasterStore((state) => state.removeToast);

  return { toasts, addToast, removeToast };
};
