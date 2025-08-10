import { FC } from "react";
import { NineDots } from "../../../../shared/icons";
import classes from "./Profile.module.scss";

export const Profile: FC = () => {
  return (
    <div className={classes.profile}>
      <div className={classes.profile__profileInfo}>
        Семенов А.А.
        <div className={classes.profile__avatar} />
      </div>
    </div>
  );
};
