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
  className?: string;
  size?: TextSize;
  align?: TextAlign;
};

export const Text: FC<PropsWithChildren<Props>> = ({
  className,
  size = TextSize.MD,
  align = TextAlign.LEFT,
  children,
}) => {
  return (
    <p
      className={cn(
        className,
        classes[`text_${size}`],
        classes[`text_${align}`]
      )}
    >
      {children}
    </p>
  );
};
