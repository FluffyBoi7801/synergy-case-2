import { z } from "zod";
import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";

extendZodWithOpenApi(z);

export const VersionResponse = z.object({
  version: z.string(),
});

export const OPEN_API_SCHEMES = [
  { name: "VersionResponse", schema: VersionResponse },
];
