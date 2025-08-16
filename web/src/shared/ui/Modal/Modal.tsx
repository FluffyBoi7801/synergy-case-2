import { FC, PropsWithChildren, useRef } from "react";
import classes from "./Modal.module.scss";
import { Portal } from "../Portal";
import { useClickOutside } from "../../hooks";
import { AnimatePresence, motion, Variants } from "framer-motion";
import cn from "classnames";

export enum ModalSize {
  SM = "sm",
  LG = "lg",
}

enum ModalState {
  INITIAL = "INITIAL",
  VISIBLE = "VISIBLE",
  HIDDEN = "HIDDEN",
}

const MODAL_STATES: Variants = {
  [ModalState.INITIAL]: { opacity: 0 },
  [ModalState.VISIBLE]: { opacity: 1 },
  [ModalState.HIDDEN]: { opacity: 0 },
};

type Props = {
  size?: ModalSize;
  isOpen: boolean;
  onClose: Function;
};

export const Modal: FC<PropsWithChildren<Props>> = ({
  size,
  isOpen,
  onClose,
  children,
}) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useClickOutside<HTMLDivElement>(modalRef, onClose);

  return (
    <Portal>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={classes.modal}
            variants={MODAL_STATES}
            initial={ModalState.INITIAL}
            animate={ModalState.VISIBLE}
            exit={ModalState.HIDDEN}
          >
            <div
              className={cn(
                classes.modal__container,
                size && classes[`modal__container_${size}`]
              )}
              ref={modalRef}
            >
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Portal>
  );
};
