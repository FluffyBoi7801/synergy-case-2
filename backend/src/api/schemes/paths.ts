import { RouteConfig } from "@asteasolutions/zod-to-openapi";
import { API_ENDPOINTS } from "../constants";
import { HTTP_METHODS } from "../../constants";
import { createApiResponse } from "./utils/responseBuilder";
import { VersionResponse } from "./schemes";

export const OPEN_API_PATHS: RouteConfig[] = [
  {
    method: HTTP_METHODS.GET,
    path: API_ENDPOINTS.VERSION,
    tags: ["Version"],
    responses: createApiResponse(
      VersionResponse,
      "Successfully get version",
      200,
    ),
  },
];
