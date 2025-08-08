import { HTTP_METHODS } from "../../../constants";
import { API_ENDPOINTS } from "../../constants";
import { LOGIN_USER_REQUEST_EXAMPLE, MessageResponse } from "../models";
import { createApiResponse } from "../utils/responseBuilder";

export const loginUser = {
  method: HTTP_METHODS.POST,
  path: API_ENDPOINTS.LOGIN,
  tags: ["User"],
  requestBody: {
    required: true,
    content: {
      "application/json": {
        example: LOGIN_USER_REQUEST_EXAMPLE,
      },
    },
  },
  responses: createApiResponse(MessageResponse, "Successfully login", 200),
};
