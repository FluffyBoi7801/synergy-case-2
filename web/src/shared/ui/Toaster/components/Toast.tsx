import { FC, PropsWithChildren } from "react";
import classes from "./Toast.module.scss";
import { motion, Variants } from "framer-motion";

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
  type: ToastType;
};

export const Toast: FC<PropsWithChildren<Props>> = ({ type, children }) => {
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
