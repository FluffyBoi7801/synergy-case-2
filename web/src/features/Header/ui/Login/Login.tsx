import { FC } from "react";
import classes from "./Login.module.scss";
import { Modal } from "../../../../shared/ui";
import { useModal } from "../../../../shared/ui/Modal/hooks";

export const Login: FC = () => {
  const { isModalOpen, handleModalOpen, handleModalClose } = useModal();

  const handleLoginClick = () => {
    handleModalOpen();
  };

  const handleRegisterClick = () => {
    handleModalOpen();
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
      <Modal isOpen={isModalOpen}>123!!!</Modal>
    </>
  );
};
