import { FC } from "react";
import { Modal, ModalSize } from "../../../../../shared/ui";
import { ModalVariants } from "./forms/constants";

type Props = {
  variant: ModalVariants;
  isOpen: boolean;
  onClose: Function;
};

export const LoginModal: FC<Props> = ({ isOpen, onClose }) => {
  return (
    <Modal size={ModalSize.SM} isOpen={isOpen} onClose={onClose}>
      123!!!
    </Modal>
  );
};
