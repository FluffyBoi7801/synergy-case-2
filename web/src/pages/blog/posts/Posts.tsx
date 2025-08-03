import { FC } from "react";
import classes from "./Posts.module.scss";
import { Post } from "./ui";

const Posts: FC = () => {
  return (
    <div className={classes.posts}>
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Posts;
