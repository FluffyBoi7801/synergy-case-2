import { apiClient } from "@/shared/api";
import type {
  CreateUserRequest,
  LoginUserRequest,
} from "@/shared/api/__generated__/apiTypes.ts";

const API_URLS = {
  users: "/users",
  login: "/login",
};

export const userService = {
  createUser: (variables: CreateUserRequest) =>
    apiClient.post(API_URLS.users, variables),
  loginUser: (variables: LoginUserRequest) =>
    apiClient.post(API_URLS.login, variables),
};
