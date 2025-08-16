import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import type { AxiosResponse } from "axios";
import type { MessageResponse } from "@/shared/api/__generated__/apiTypes.ts";
import { userService } from "@/shared/api/user/userService.ts";

export const useLogoutUser = (
  options?: UseMutationOptions<
    AxiosResponse<MessageResponse, unknown>,
    unknown,
    unknown
  >
) =>
  useMutation({
    mutationFn: async () => await userService.logoutUser(),
    ...options,
  });
