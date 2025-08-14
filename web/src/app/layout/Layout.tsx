import { FC, useEffect } from "react";
import classes from "./Layout.module.scss";
import { Outlet } from "react-router-dom";
import { Header } from "../../features";
import { useCurrentUser } from "@/shared/store";
import { useGetCurrentUser } from "@/shared/api/user";
import { Loader } from "@/shared/ui/Loader";

// TODO: enabled on cookies

const Layout: FC = () => {
  const { setUserInfo } = useCurrentUser();

  const { data: currentUser, isFetching: isCurrentUserFetching } =
    useGetCurrentUser();

  useEffect(() => {
    if (currentUser) {
      setUserInfo({
        id: currentUser.id,
        firstname: currentUser.firstname,
        lastname: currentUser.lastname,
      });
    }
  }, [currentUser]);

  if (isCurrentUserFetching) {
    return (
      <div className={classes.layout__loader}>
        <Loader size={48} />
      </div>
    );
  }

  return (
    <div className={classes.layout}>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
