import { HTTP_METHODS } from "../../../../constants";
import { API_ENDPOINTS, USERS_API_ENDPOINTS } from "../../../constants";
import { MessageResponse } from "../../models";
import { createApiResponse } from "../../utils/responseBuilder";

export const checkAuth = {
  method: HTTP_METHODS.GET,
  path: `${API_ENDPOINTS.USERS}${USERS_API_ENDPOINTS.CHECK_AUTH}`,
  tags: ["User"],
  responses: createApiResponse(
    MessageResponse,
    "Successfully get auth status",
    200,
  ),
};
