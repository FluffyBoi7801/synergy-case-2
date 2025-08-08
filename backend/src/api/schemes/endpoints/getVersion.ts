import { HTTP_METHODS } from "../../../constants";
import { API_ENDPOINTS } from "../../constants";
import { createApiResponse } from "../utils/responseBuilder";
import { VersionResponse } from "../models";

export const getVersion = {
  method: HTTP_METHODS.GET,
  path: API_ENDPOINTS.VERSION,
  tags: ["Version"],
  responses: createApiResponse(
    VersionResponse,
    "Successfully get version",
    200,
  ),
};
