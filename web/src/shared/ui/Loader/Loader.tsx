import { LoaderIcon } from "@/shared/icons";
import classes from "./Loader.module.scss";

export const Loader = () => {
  return (
    <div className={classes.loader}>
      <LoaderIcon />
    </div>
  );
};
