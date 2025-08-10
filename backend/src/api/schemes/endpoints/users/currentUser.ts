import { HTTP_METHODS } from "../../../../constants";
import { API_ENDPOINTS, USERS_API_ENDPOINTS } from "../../../constants";
import { CurrentUserResponse } from "../../models";
import { createApiResponse } from "../../utils/responseBuilder";

export const currentUser = {
  method: HTTP_METHODS.GET,
  path: `${API_ENDPOINTS.USERS}${USERS_API_ENDPOINTS.CURRENT}`,
  tags: ["User"],
  responses: createApiResponse(
    CurrentUserResponse,
    "Successfully get current user",
    200,
  ),
};
