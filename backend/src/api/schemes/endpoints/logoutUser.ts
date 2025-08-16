import { HTTP_METHODS } from "../../../constants";
import { API_ENDPOINTS } from "../../constants";
import { MessageResponse } from "../models";
import { createApiResponse } from "../utils/responseBuilder";

export const logoutUser = {
  method: HTTP_METHODS.POST,
  path: API_ENDPOINTS.LOGOUT,
  tags: ["User"],
  responses: createApiResponse(MessageResponse, "Successfully logout", 200),
};
