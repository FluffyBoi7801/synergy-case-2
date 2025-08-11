import { FC, MouseEventHandler, PropsWithChildren } from "react";
import classes from "./Button.module.scss";
import cn from "classnames";
import { Loader } from "@/shared/ui/Loader/Loader.tsx";

export enum ButtonType {
  submit = "submit",
}

type Props = {
  type?: ButtonType;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  isLoading?: boolean;
  disabled?: boolean;
};

export const Button: FC<PropsWithChildren<Props>> = ({
  type,
  onClick,
  isLoading,
  disabled,
  children,
}) => {
  return (
    <button
      type={type}
      className={cn(
        classes.button,
        (disabled || isLoading) && classes.button__disabled
      )}
      disabled={disabled || isLoading}
      onClick={onClick}
    >
      {isLoading ? <Loader /> : children}
    </button>
  );
};
