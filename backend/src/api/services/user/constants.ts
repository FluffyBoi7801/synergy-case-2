import { env } from "../../../utils";

export const JWT_SETTINGS: Record<string, string> = {
  secret: env.JWT_SECRET,
  refreshSecret: env.JWT_REFRESH_SECRET,
};
