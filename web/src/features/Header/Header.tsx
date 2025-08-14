import { FC } from "react";
import classes from "./Header.module.scss";
import { Login, Logo, Profile } from "./ui";
import { NineDots } from "@/shared/icons";
import { useCurrentUser } from "@/shared/store";

const Header: FC = () => {
  const { user } = useCurrentUser();
  const isUserLoggedin = !!user;

  return (
    <header className={classes.header}>
      <Logo />
      <div className={classes.header__profileContainer}>
        <button className={classes.header__ninedotsButton}>
          <NineDots />
        </button>
        {isUserLoggedin ? <Profile user={user} /> : <Login />}
      </div>
    </header>
  );
};

export default Header;
