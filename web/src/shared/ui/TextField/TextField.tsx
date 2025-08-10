import { FC } from "react";
import classes from "./TextField.module.scss";
import { Text, TextSize } from "@/shared/ui";

type Props = {
  label?: string;
};

export const TextField: FC<Props> = ({ label }) => {
  return (
    <div className={classes.textField}>
      {label && <Text size={TextSize.SM}>{label}</Text>}
      <input className={classes.textField__input} type="text" />
    </div>
  );
};
