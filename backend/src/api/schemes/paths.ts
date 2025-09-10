import { RouteConfig } from "@asteasolutions/zod-to-openapi";
import {
  activateUser,
  checkAuth,
  createUser,
  currentUser,
  getVersion,
  loginUser,
  logoutUser,
} from "./endpoints";

export const OPEN_API_PATHS: RouteConfig[] = [
  getVersion,
  createUser,
  activateUser,
  loginUser,
  currentUser,
  logoutUser,
  checkAuth,
];
