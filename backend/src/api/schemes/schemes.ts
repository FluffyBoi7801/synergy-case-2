import { z } from "zod";
import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";

extendZodWithOpenApi(z);

export const VersionResponse = z.object({
  version: z.string(),
});

export const CreateUserRequest = z.object({
  firstname: z.string(),
  lastname: z.string(),
  email: z.email(),
  password: z.string(),
});

export const createUserExample = {
  firstname: "Иван",
  lastname: "Иванов",
  email: "ivanov@gmail.com",
  password: "123456",
};

export const OPEN_API_SCHEMES = [
  { name: "VersionResponse", schema: VersionResponse },
  { name: "CreateUserRequest", schema: CreateUserRequest },
];
