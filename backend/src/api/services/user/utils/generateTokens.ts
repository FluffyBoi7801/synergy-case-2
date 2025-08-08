import { sign } from "jsonwebtoken";
import { JWT_SETTINGS } from "../constants";

const ACCESS_TOKEN_EXPIRES = "30m";
const REFRESH_TOKEN_EXPIRES = "7d";

type Payload = {
  userId: string;
};

export const generateTokens = (payload: Payload) => {
  if (JWT_SETTINGS.secret && JWT_SETTINGS.refreshSecret) {
    const accessToken = sign(payload, JWT_SETTINGS.secret, {
      expiresIn: ACCESS_TOKEN_EXPIRES,
    });

    const refreshToken = sign(payload, JWT_SETTINGS.refreshSecret, {
      expiresIn: REFRESH_TOKEN_EXPIRES,
    });

    return { accessToken, refreshToken };
  } else {
    throw new Error(
      "JWT_SECRET и JWT_REFRESH_SECRET не установлены в .env файле",
    );
  }
};
