import { FC } from "react";
import classes from "./Post.module.scss";

export const Post: FC = () => {
  return (
    <div className={classes.post}>
      <div>left</div>
      <div>right</div>
    </div>
  );
};
