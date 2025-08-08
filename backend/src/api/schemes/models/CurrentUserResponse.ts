import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

extendZodWithOpenApi(z);

export const CurrentUserResponse = z.object({
  id: z.string(),
  firstname: z.string(),
  lastname: z.string(),
});
