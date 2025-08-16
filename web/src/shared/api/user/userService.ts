import { apiClient } from "@/shared/api";
import type {
  CreateUserRequest,
  LoginUserRequest,
} from "@/shared/api/__generated__/apiTypes.ts";

const API_URLS = {
  users: "/users",
  login: "/login",
  logout: "/logout",
};

const USERS_API = {
  current: "/current",
};

export const userService = {
  createUser: (variables: CreateUserRequest) =>
    apiClient.post(API_URLS.users, variables),
  loginUser: (variables: LoginUserRequest) =>
    apiClient.post(API_URLS.login, variables),
  getCurrentUser: () => apiClient.get(`${API_URLS.users}${USERS_API.current}`),
  logoutUser: () => apiClient.post(API_URLS.logout),
};
