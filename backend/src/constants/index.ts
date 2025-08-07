import type { Method } from "./types";

export const STANDS: Record<string, string> = {
  DEVELOP: "develop",
  PRODUCTION: "production",
};

export const API_ENDPOINT = "/api";

export const API_DOCS_ENDPOINT = "/api-docs";

export const HTTP_METHODS: Record<string, Method> = {
  GET: "get",
  POST: "post",
  PATCH: "patch",
  PUT: "put",
  DELETE: "delete",
};
