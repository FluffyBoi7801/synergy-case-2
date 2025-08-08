import { RouteConfig } from "@asteasolutions/zod-to-openapi";
import { activateUser, createUser, getVersion } from "./endpoints";

export const OPEN_API_PATHS: RouteConfig[] = [
  getVersion,
  createUser,
  activateUser,
];
