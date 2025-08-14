import { FC, PropsWithChildren, useEffect, useState } from "react";
import classes from "./Toast.module.scss";
import { motion, Variants } from "framer-motion";
import { useToaster } from "@/shared/ui/Toaster/hooks";
import cn from "classnames";
import { CheckIcon, CloseIcon, ErrorIcon } from "@/shared/icons";

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

const TOAST_TIMEOUT = 6000;

const TIMEOUT_DISCRETIZATION = 50;

type Props = {
  id: string;
  type: ToastType;
};

export const Toast: FC<PropsWithChildren<Props>> = ({ id, type, children }) => {
  let timer: NodeJS.Timeout;
  const { removeToast } = useToaster();
  const [progress, setProgress] = useState(0);
  const progressStep = (100 / (TOAST_TIMEOUT / TIMEOUT_DISCRETIZATION)).toFixed(
    2
  );

  useEffect(() => {
    timer = setInterval(() => {
      if (progress + Number(progressStep) < 100) {
        setProgress((prev) => Number((prev + Number(progressStep)).toFixed(2)));
      } else if (progress === 100) {
        removeToast(id);
      } else {
        setProgress(100);
      }
    }, TIMEOUT_DISCRETIZATION);

    return () => clearInterval(timer);
  }, [progress]);

  const getToastIcon = (type: ToastType) => {
    switch (type) {
      case ToastType.OK:
        return <CheckIcon />;
      case ToastType.ERROR:
        return <ErrorIcon />;
    }
  };

  return (
    <motion.div
      className={cn(classes.toast, classes[`toast_${type}`])}
      variants={TOAST_STATES}
      initial={ToastState.INITIAL}
      animate={ToastState.VISIBLE}
      exit={ToastState.HIDDEN}
      data-progress={progress}
    >
      {getToastIcon(type)}
      {children}
      <button
        className={classes.toast__closeIcon}
        onClick={() => removeToast(id)}
      >
        <CloseIcon size={20} />
      </button>
      <span
        style={{ width: `${progress}%` }}
        className={classes.toast__progressbar}
      />
    </motion.div>
  );
};
