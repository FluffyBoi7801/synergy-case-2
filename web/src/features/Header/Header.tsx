import { FC } from "react";
import classes from "./Header.module.scss";
import { Login, Logo, Profile } from "./ui";
import { NineDots } from "../../shared/icons";

const Header: FC = () => {
  const isUserLoggedin = false;

  return (
    <header className={classes.header}>
      <Logo />
      <div className={classes.header__profileContainer}>
        <button className={classes.header__ninedotsButton}>
          <NineDots />
        </button>
        {isUserLoggedin ? <Profile /> : <Login />}
      </div>
    </header>
  );
};

export default Header;
