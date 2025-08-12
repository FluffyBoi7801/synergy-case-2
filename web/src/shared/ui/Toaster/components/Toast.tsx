import { FC, PropsWithChildren, useEffect } from "react";
import classes from "./Toast.module.scss";
import { motion, Variants } from "framer-motion";
import { useToaster } from "@/shared/ui/Toaster/hooks";

enum ToastState {
  INITIAL = "INITIAL",
  VISIBLE = "VISIBLE",
  HIDDEN = "HIDDEN",
}

export enum ToastType {
  OK = "ok",
  ERROR = "error",
}

const TOAST_STATES: Variants = {
  [ToastState.INITIAL]: { opacity: 0 },
  [ToastState.VISIBLE]: { opacity: 1 },
  [ToastState.HIDDEN]: { opacity: 0 },
};

type Props = {
  id: string;
  type: ToastType;
};

// TODO: прогрессбар в виде полоски снизу

export const Toast: FC<PropsWithChildren<Props>> = ({ id, type, children }) => {
  const { removeToast } = useToaster();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(id);
    }, 6000);

    return () => clearTimeout(timer);
  }, [id, removeToast]);

  return (
    <motion.div
      className={classes.toast}
      variants={TOAST_STATES}
      initial={ToastState.INITIAL}
      animate={ToastState.VISIBLE}
      exit={ToastState.HIDDEN}
    >
      {children}
    </motion.div>
  );
};
