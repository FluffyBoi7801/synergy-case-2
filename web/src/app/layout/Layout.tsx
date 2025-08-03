import { FC } from "react";
import classes from "./Layout.module.scss";
import { Outlet } from "react-router-dom";
import { Header } from "../../features";

const Layout: FC = () => {
  return (
    <div className={classes.layout}>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
