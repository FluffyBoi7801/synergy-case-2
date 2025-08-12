import { Portal } from "@/shared/ui";
import { useToaster } from "@/shared/ui/Toaster/hooks";
import { AnimatePresence } from "framer-motion";
import { Toast, ToastType } from "@/shared/ui/Toaster/components";
import { useEffect } from "react";
import classes from "./Toaster.module.scss";

export const Toaster = () => {
  const { toasts, addToast } = useToaster();

  useEffect(() => {
    addToast({
      type: ToastType.OK,
      text: "Hello World",
    });
  }, []);

  return (
    <Portal>
      <div className={classes.toaster}>
        <AnimatePresence initial={false} mode="popLayout">
          {toasts.map(({ id, type, text }) => (
            <Toast key={id} id={id} type={type}>
              {text}
            </Toast>
          ))}
        </AnimatePresence>
      </div>
    </Portal>
  );
};
