import { sign } from "jsonwebtoken";
import { JWT_SETTINGS } from "../constants";

export const generateTokens = (userId: string) => {
  const accessToken = sign({ userId }, JWT_SETTINGS.secret, {
    expiresIn: "30m",
  });

  const refreshToken = sign({ userId }, JWT_SETTINGS.refreshSecret, {
    expiresIn: "7d",
  });

  return { accessToken, refreshToken };
};
