import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import {
  CreateUserRequest,
  MessageResponse,
} from "@/shared/api/__generated__/apiTypes.ts";
import { userService } from "@/shared/api/user/userService.ts";

export const useCreateUser = (
  options?: UseMutationOptions<
    AxiosResponse<MessageResponse, unknown>,
    unknown,
    CreateUserRequest
  >
) =>
  useMutation({
    mutationFn: async (variables) => await userService.createUser(variables),
    ...options,
  });
