import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import { OPEN_API_SCHEMES } from "../schemes";
import { OPEN_API_PATHS } from "../paths";

export const swaggerRegistrator = (registry: OpenAPIRegistry) => {
  OPEN_API_SCHEMES.map(({ name, schema }) => {
    registry.register(name, schema);
  });

  OPEN_API_PATHS.map((path) => {
    registry.registerPath(path);
  });
};
