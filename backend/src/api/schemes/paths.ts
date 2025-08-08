import { RouteConfig } from "@asteasolutions/zod-to-openapi";
import { createUser, getVersion } from "./endpoints";

export const OPEN_API_PATHS: RouteConfig[] = [getVersion, createUser];
