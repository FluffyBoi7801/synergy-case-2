import { HTTP_METHODS } from "../../../constants";
import { API_ENDPOINTS } from "../../constants";
import { CREATE_USER_REQUEST_EXAMPLE } from "../models";
import { createApiResponse } from "../utils/responseBuilder";
import { z } from "zod";

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
    z.object({ message: z.string() }),
    "Successfully create user",
    201,
  ),
};
