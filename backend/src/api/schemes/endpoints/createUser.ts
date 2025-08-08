import { HTTP_METHODS } from "../../../constants";
import { API_ENDPOINTS } from "../../constants";
import { CREATE_USER_REQUEST_EXAMPLE, MessageResponse } from "../models";
import { createApiResponse } from "../utils/responseBuilder";

export const createUser = {
  method: HTTP_METHODS.POST,
  path: API_ENDPOINTS.USERS,
  tags: ["User"],
  requestBody: {
    required: true,
    content: {
      "application/json": {
        example: CREATE_USER_REQUEST_EXAMPLE,
      },
    },
  },
  responses: createApiResponse(
    MessageResponse,
    "Successfully create user",
    201,
  ),
};
