import { FC, useState } from "react";
import classes from "./Profile.module.scss";
import { User } from "@/shared/store/currentUser/currentUser";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { Button } from "@/shared/ui";
import { ButtonColor } from "@/shared/ui/Button/Button.tsx";

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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleToggleProfile = () => setIsDropdownOpen((prev) => !prev);

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
            <Button color={ButtonColor.attention} onClick={handleToggleProfile}>
              Выход
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
