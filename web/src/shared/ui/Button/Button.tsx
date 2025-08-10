import { FC, PropsWithChildren } from "react";
import classes from "./Button.module.scss";

type Props = {};

export const Button: FC<PropsWithChildren<Props>> = ({ children }) => {
  return <button className={classes.button}>{children}</button>;
};
