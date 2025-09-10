import { z } from "zod";
import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";

extendZodWithOpenApi(z);

export const CheckAuthResponse = z.object({ isAuthenticated: z.boolean() });
