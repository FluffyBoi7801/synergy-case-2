import { FC, PropsWithChildren } from "react";
import classes from "./Text.module.scss";
import cn from "classnames";

export enum TextSize {
  SM = "sm",
  MD = "md",
  LG = "lg",
}

export enum TextAlign {
  LEFT = "left",
  CENTER = "center",
  RIGHT = "right",
}

type Props = {
  size?: TextSize;
  align?: TextAlign;
};

export const Text: FC<PropsWithChildren<Props>> = ({
  size = TextSize.MD,
  align = TextAlign.LEFT,
  children,
}) => {
  return (
    <p className={cn(classes[`text_${size}`], classes[`text_${align}`])}>
      {children}
    </p>
  );
};
