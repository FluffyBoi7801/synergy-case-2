import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

extendZodWithOpenApi(z);

export const LoginUserRequest = z.object({
  email: z.email(),
  password: z.string(),
});

export const LOGIN_USER_REQUEST_EXAMPLE = {
  email: "ivanov@example.com",
  password: "123456789",
};
