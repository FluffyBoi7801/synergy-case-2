import { FC } from "react";
import classes from "./Header.module.scss";
import { Logo, Profile } from "./ui";

const Header: FC = () => {
  return (
    <header className={classes.header}>
      <Logo />
      <Profile />
    </header>
  );
};

export default Header;
