import { currentUserStore } from "@/shared/store";

export const useCurrentUser = () => {
  const user = currentUserStore((state) => state.user);

  const setUserInfo = currentUserStore((state) => state.setUserInfo);

  const clearUserInfo = currentUserStore((state) => state.clearUserInfo);

  return { user, setUserInfo, clearUserInfo };
};
