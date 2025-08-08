import { HTTP_METHODS } from "../../../constants";
import { API_ENDPOINTS } from "../../constants";
import { MessageResponse } from "../models";
import { createApiResponse } from "../utils/responseBuilder";
import { z } from "zod";

export const activateUser = {
  method: HTTP_METHODS.GET,
  path: `${API_ENDPOINTS.ACTIVATE}/{uuid}`,
  tags: ["User"],
  request: {
    params: z.object({
      uuid: z.string().openapi({
        description: "User activation UUID",
        example: "12345678-1234-1234-1234-123456789012",
      }),
    }),
  },
  responses: createApiResponse(MessageResponse, "Successfully activated", 200),
};
