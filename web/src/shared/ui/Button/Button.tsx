import { FC, MouseEventHandler, PropsWithChildren } from "react";
import classes from "./Button.module.scss";
import cn from "classnames";
import { Loader } from "@/shared/ui/Loader/Loader.tsx";

export enum ButtonColor {
  primary = "primary",
  attention = "attention",
}

export enum ButtonType {
  submit = "submit",
}

type Props = {
  type?: ButtonType;
  color?: ButtonColor;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  isLoading?: boolean;
  disabled?: boolean;
};

export const Button: FC<PropsWithChildren<Props>> = ({
  type,
  color = ButtonColor.primary,
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
        classes[`button_${color}`],
        (disabled || isLoading) && classes.button__disabled
      )}
      disabled={disabled || isLoading}
      onClick={onClick}
    >
      {isLoading ? <Loader /> : children}
    </button>
  );
};
