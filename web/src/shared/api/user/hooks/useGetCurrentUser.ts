import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { userService } from "@/shared/api/user/userService.ts";
import { CurrentUserResponse } from "@/shared/api/__generated__/apiTypes.ts";
import Cookie from "js-cookie";

export const useGetCurrentUser = (
  options?: UseQueryOptions<
    AxiosResponse<CurrentUserResponse, unknown>,
    unknown,
    CurrentUserResponse,
    string[]
  >
) => {
  const accessToken = Cookie.get("accessToken");
  const refreshToken = Cookie.get("refreshToken");

  return useQuery({
    ...options,
    queryKey: ["currentUser"],
    queryFn: userService.getCurrentUser,
    select: (data) => data.data,
    enabled: !!accessToken || !!refreshToken,
  });
};
