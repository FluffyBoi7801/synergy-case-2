import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

extendZodWithOpenApi(z);

export const CreateUserRequest = z.object({
  firstname: z.string(),
  lastname: z.string(),
  email: z.email(),
  password: z.string(),
});

export const CREATE_USER_REQUEST_EXAMPLE = {
  firstname: "Иван",
  lastname: "Иванов",
  email: "ivanov@gmail.com",
  password: "123456",
};
