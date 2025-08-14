import { Portal } from "@/shared/ui";
import { useToaster } from "@/shared/ui/Toaster/hooks";
import { AnimatePresence } from "framer-motion";
import { Toast } from "@/shared/ui/Toaster/components";
import classes from "./Toaster.module.scss";

export const Toaster = () => {
  const { toasts } = useToaster();

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
