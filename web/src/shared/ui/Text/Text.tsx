import { FC, PropsWithChildren } from "react";
import classes from "./Text.module.scss";
import cn from "classnames";

export enum TextSize {
  SM = "sm",
  MD = "md",
  LG = "lg",
}

type Props = {
  size?: TextSize;
};

export const Text: FC<PropsWithChildren<Props>> = ({
  size = TextSize.MD,
  children,
}) => {
  return <p className={cn(classes[`text_${size}`])}>{children}</p>;
};
