import { FC, PropsWithChildren } from "react";
import classes from "./Modal.module.scss";
import { Portal } from "../Portal";

type Props = {
  isOpen: boolean;
};

export const Modal: FC<PropsWithChildren<Props>> = ({ isOpen, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Portal>
      <div className={classes.modal}>{children}</div>
    </Portal>
  );
};
