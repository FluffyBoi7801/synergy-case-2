import { currentUserStore } from "@/shared/store";

export const useCurrentUser = () => {
  const user = currentUserStore((state) => state.user);

  const setUserInfo = currentUserStore((state) => state.setUserInfo);

  return { user, setUserInfo };
};
