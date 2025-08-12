import { apiClient } from "@/shared/api";
import type { CreateUserRequest } from "@/shared/api/__generated__/apiTypes.ts";

const API_URLS = {
  users: "/users",
};

export const userService = {
  createUser: (variables: CreateUserRequest) =>
    apiClient.post(API_URLS.users, variables),
};
