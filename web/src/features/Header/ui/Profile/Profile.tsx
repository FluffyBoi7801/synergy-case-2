import { FC } from "react";
import classes from "./Profile.module.scss";
import { User } from "@/shared/store/currentUser/currentUser";

type Props = {
  user: User;
};

export const Profile: FC<Props> = ({ user }) => {
  console.log(user);

  return (
    <div className={classes.profile}>
      <div className={classes.profile__profileInfo}>
        {user.firstname} {user.lastname}
        <div className={classes.profile__avatar} />
      </div>
    </div>
  );
};
