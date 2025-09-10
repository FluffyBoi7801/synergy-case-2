import { FC, useState } from "react";
import classes from "./Profile.module.scss";
import { User } from "@/shared/store/currentUser/currentUser";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { Button } from "@/shared/ui";
import { ButtonColor } from "@/shared/ui/Button/Button.tsx";
import { useLogoutUser } from "@/shared/api/user";
import { useToaster } from "@/shared/ui/Toaster/hooks";
import { ToastType } from "@/shared/ui/Toaster/components";
import { useCurrentUser } from "@/shared/store";

enum DropdownState {
  INITIAL = "INITIAL",
  VISIBLE = "VISIBLE",
  HIDDEN = "HIDDEN",
}

const DROPDOWN_STATES: Variants = {
  [DropdownState.INITIAL]: { y: -5, opacity: 0 },
  [DropdownState.VISIBLE]: { y: 0, opacity: 1 },
  [DropdownState.HIDDEN]: { y: -5, opacity: 0 },
};

type Props = {
  user: User;
};

export const Profile: FC<Props> = ({ user }) => {
  const { addToast } = useToaster();
  const { mutate: logoutUser, isPending: isUserLoggingout } = useLogoutUser({
    onSuccess: () => {
      addToast({ type: ToastType.OK, text: "Выход выполнен" });
      clearUserInfo();
    },
    onError: () => {
      addToast({
        type: ToastType.ERROR,
        text: "Произошла ошибка при выходе",
      });
    },
  });
  const { clearUserInfo } = useCurrentUser();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleToggleProfile = () => setIsDropdownOpen((prev) => !prev);

  const handleLogout = () => {
    logoutUser({});
  };

  return (
    <div className={classes.profile}>
      <div className={classes.profile__container} onClick={handleToggleProfile}>
        <div className={classes.profile__profileInfo}>
          {user.firstname} {user.lastname}
          <div className={classes.profile__avatar} />
        </div>
      </div>
      <AnimatePresence>
        {isDropdownOpen && (
          <motion.div
            className={classes.profile__dropdown}
            variants={DROPDOWN_STATES}
            initial={DropdownState.INITIAL}
            animate={DropdownState.VISIBLE}
            exit={DropdownState.HIDDEN}
          >
            <Button
              color={ButtonColor.attention}
              isLoading={isUserLoggingout}
              onClick={handleLogout}
            >
              Выход
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
