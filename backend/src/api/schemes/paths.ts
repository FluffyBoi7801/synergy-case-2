import { RouteConfig } from "@asteasolutions/zod-to-openapi";
import { API_ENDPOINTS } from "../constants";
import { HTTP_METHODS } from "../../constants";
import { createApiResponse } from "./utils/responseBuilder";
import { createUserExample, VersionResponse } from "./schemes";
import { z } from "zod";

const getVersion = {
  method: HTTP_METHODS.GET,
  path: API_ENDPOINTS.VERSION,
  tags: ["Version"],
  responses: createApiResponse(
    VersionResponse,
    "Successfully get version",
    200,
  ),
};

const createUser = {
  method: HTTP_METHODS.POST,
  path: API_ENDPOINTS.USERS,
  tags: ["User"],
  requestBody: {
    required: true,
    content: {
      "application/json": {
        example: createUserExample,
      },
    },
  },
  responses: createApiResponse(
    z.object({ message: z.string() }),
    "Successfully create user",
    201,
  ),
};

export const OPEN_API_PATHS: RouteConfig[] = [getVersion, createUser];
