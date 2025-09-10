import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { userService } from "@/shared/api/user/userService.ts";
import { CurrentUserResponse } from "@/shared/api/__generated__/apiTypes.ts";

export const useCheckUserAuth = (
  options?: Omit<
    UseQueryOptions<
      AxiosResponse<CurrentUserResponse, unknown>,
      unknown,
      CurrentUserResponse,
      string[]
    >,
    "queryKey"
  >
) => {
  return useQuery({
    ...options,
    queryKey: ["checkUserAuth"],
    queryFn: userService.checkAuth,
    select: (data) => data.data,
  });
};
