import { FC } from "react";
import { Modal, ModalSize } from "@/shared/ui";
import { ModalVariants } from "./forms/constants";
import { RegistrationForm } from "@/features/Header/ui/Login/LoginModal/forms/RegistrationForm";

type Props = {
  variant: ModalVariants;
  isOpen: boolean;
  onClose: Function;
};

export const LoginModal: FC<Props> = ({ variant, isOpen, onClose }) => {
  const getModalContent = () => {
    switch (variant) {
      case ModalVariants.LOGIN:
        return <div>mock</div>;
      case ModalVariants.REGISTRATION:
        return <RegistrationForm />;
    }
  };

  return (
    <Modal size={ModalSize.SM} isOpen={isOpen} onClose={onClose}>
      {getModalContent()}
    </Modal>
  );
};
