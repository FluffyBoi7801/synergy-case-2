import { FC, useEffect, useState } from "react";
import classes from "./Layout.module.scss";
import { Outlet } from "react-router-dom";
import { Header } from "../../features";
import { useCurrentUser } from "@/shared/store";
import { useCheckUserAuth, useGetCurrentUser } from "@/shared/api/user";
import { Loader } from "@/shared/ui/Loader";

const Layout: FC = () => {
  const { setUserInfo } = useCurrentUser();
  const [isUserAuth, setIsUserAuth] = useState(false);

  const { isSuccess: isAuthSuccess } = useCheckUserAuth();

  useEffect(() => {
    setIsUserAuth(isAuthSuccess);
  }, [isAuthSuccess]);

  const { data: currentUser, isFetching: isCurrentUserFetching } =
    useGetCurrentUser({
      enabled: isUserAuth,
    });

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
