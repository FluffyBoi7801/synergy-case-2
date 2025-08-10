import { FC, useState } from "react";
import classes from "./Login.module.scss";
import { useModal } from "@/shared/ui/Modal/hooks";
import { LoginModal } from "./LoginModal";
import { ModalVariants } from "@/features/Header/ui/Login/LoginModal/forms/constants.ts";

export const Login: FC = () => {
  const { isModalOpen, handleModalOpen, handleModalClose } = useModal();
  const [modalVariant, setModalVariant] = useState<ModalVariants>(
    ModalVariants.LOGIN
  );

  const handleLoginClick = () => {
    handleModalOpen();
    setModalVariant(ModalVariants.LOGIN);
  };

  const handleRegisterClick = () => {
    handleModalOpen();
    setModalVariant(ModalVariants.REGISTRATION);
  };

  return (
    <>
      <div className={classes.login}>
        <button
          className={classes.login__actionButton}
          onClick={handleLoginClick}
        >
          Войти
        </button>
        <button
          className={classes.login__actionButton}
          onClick={handleRegisterClick}
        >
          Зарегистрироваться
        </button>
      </div>
      <LoginModal
        variant={modalVariant}
        isOpen={isModalOpen}
        onClose={handleModalClose}
      />
    </>
  );
};
