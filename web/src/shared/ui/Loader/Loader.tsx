import { LoaderIcon } from "@/shared/icons";
import classes from "./Loader.module.scss";
import { FC } from "react";

type Props = {
  size?: number;
};

export const Loader: FC<Props> = ({ size }) => {
  return (
    <div className={classes.loader}>
      <LoaderIcon size={size} />
    </div>
  );
};
