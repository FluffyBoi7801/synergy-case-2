import { z } from "zod";

export const createApiResponse = (
  schema: z.ZodTypeAny,
  description: string,
  statusCode = 200,
) => {
  return {
    [statusCode]: {
      description,
      content: {
        "application/json": {
          schema: z.object({
            success: z.boolean(),
            message: z.string(),
            responseObject: schema.optional(),
            statusCode: z.number(),
          }),
        },
      },
    },
  };
};
