import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import {
  LoginUserRequest,
  MessageResponse,
} from "@/shared/api/__generated__/apiTypes.ts";
import { userService } from "@/shared/api/user/userService.ts";

export const useLoginUser = (
  options?: UseMutationOptions<
    AxiosResponse<MessageResponse, unknown>,
    unknown,
    LoginUserRequest
  >
) =>
  useMutation({
    mutationFn: async (variables) => await userService.loginUser(variables),
    ...options,
  });
