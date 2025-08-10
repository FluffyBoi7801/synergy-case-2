import { JWT_SETTINGS } from "../constants";
import { JwtPayload, verify } from "jsonwebtoken";
import { TokenPayload } from "./generateTokens";

export const verifyRefreshToken = (token: string) => {
  if (JWT_SETTINGS.refreshSecret) {
    return verify(token, JWT_SETTINGS.refreshSecret) as TokenPayload &
      JwtPayload;
  } else {
    throw new Error("JWT_REFRESH_SECRET не установлен в .env файле");
  }
};
