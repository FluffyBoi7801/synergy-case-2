import { RouteConfig } from "@asteasolutions/zod-to-openapi";
import { activateUser, createUser, getVersion, loginUser } from "./endpoints";

export const OPEN_API_PATHS: RouteConfig[] = [
  getVersion,
  createUser,
  activateUser,
  loginUser,
];
