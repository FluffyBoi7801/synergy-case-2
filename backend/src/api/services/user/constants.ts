import { env } from "../../../utils";

export const JWT_SETTINGS = {
  secret: env.JWT_SECRET,
  refreshSecret: env.JWT_REFRESH_SECRET,
};

export const SALT_ROUNDS = 10;
