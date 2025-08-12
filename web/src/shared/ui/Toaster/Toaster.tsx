import { Portal } from "@/shared/ui";
import { useToaster } from "@/shared/ui/Toaster/hooks";
import { AnimatePresence } from "framer-motion";
import { Toast, ToastType } from "@/shared/ui/Toaster/components";
import { useEffect } from "react";
import classes from "./Toaster.module.scss";

const TOAST_TIMER = 6000;

export const Toaster = () => {
  const { toasts, removeToast, addToast } = useToaster();

  useEffect(() => {
    addToast({
      type: ToastType.OK,
      text: "Hello World",
    });
  }, []);

  return (
    <Portal>
      <AnimatePresence>
        <div className={classes.toaster}>
          {toasts.map(({ id, type, text }) => {
            const handleRemoveClick = () => {
              removeToast(id);
            };

            setTimeout(() => {
              handleRemoveClick();
            }, TOAST_TIMER);

            return (
              <Toast key={id} type={type}>
                {text}
              </Toast>
            );
          })}
        </div>
      </AnimatePresence>
    </Portal>
  );
};
