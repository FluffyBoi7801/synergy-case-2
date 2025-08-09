import { JWT_SETTINGS } from "../constants";
import { JwtPayload, verify } from "jsonwebtoken";
import { TokenPayload } from "./generateTokens";

export const verifyToken = (token: string) => {
  if (JWT_SETTINGS.secret) {
    return verify(token, JWT_SETTINGS.secret) as TokenPayload & JwtPayload;
  } else {
    throw new Error("JWT_SECRET не установлен в .env файле");
  }
};
