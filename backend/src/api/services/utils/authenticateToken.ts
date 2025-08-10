import type { NextFunction, Request, Response } from "express";
import { env, log, prismaClient } from "../../../utils";
import { LogType } from "../../../utils/logger";
import { generateTokens, verifyRefreshToken, verifyToken } from "../user/utils";
import { TokenExpiredError } from "jsonwebtoken";

const refreshTokens = async (
  req: Request,
  res: Response,
  next: NextFunction,
  refreshToken: string,
) => {
  log(
    LogType.WARNING,
    `Access token устарел для запроса от ${req.ip}. Обновляем...`,
  );

  try {
    const decodedToken = verifyRefreshToken(refreshToken);
    log(
      LogType.INFO,
      `Refresh токен для запроса от ${req.ip} успешно проверен`,
    );

    if (decodedToken) {
      const newTokens = generateTokens({ userId: decodedToken.userId });
      log(LogType.INFO, `Для запроса от ${req.ip} сгенерированы новые токены`);

      await prismaClient.user.update({
        where: { id: decodedToken.userId },
        data: { refresh_token: newTokens.refreshToken },
      });

      log(
        LogType.INFO,
        `Обновленный refresh token для пользователя ${decodedToken.userId} сохранен в базе данных`,
      );

      log(LogType.INFO, `Попытка записи данных пользователя в запрос`);

      res.locals.user = await prismaClient.user.findUnique({
        where: { id: decodedToken.userId },
      });

      log(LogType.INFO, `Данные пользователя записаны в запрос`);

      res
        .cookie("accessToken", newTokens.accessToken, {
          httpOnly: true,
          secure: env.NODE_ENV === "production",
          sameSite: "strict",
          maxAge: 30 * 60 * 1000,
        })
        .cookie("refreshToken", newTokens.refreshToken, {
          httpOnly: true,
          secure: env.NODE_ENV === "production",
          sameSite: "strict",
          maxAge: 7 * 24 * 60 * 60 * 1000,
        });

      log(LogType.INFO, `Запрос от ${req.ip} успешно авторизован`);

      next();
    }
  } catch (error) {
    throw new Error("Refresh token не действителен или подделан");
  }
};

export const authenticateToken = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { accessToken, refreshToken } = req.cookies;
  log(LogType.INFO, `Начата авторизация пользователя для запроса от ${req.ip}`);

  if (!accessToken && refreshToken) {
    return await refreshTokens(req, res, next, refreshToken);
  }

  try {
    const decodedToken = verifyToken(accessToken);

    if (decodedToken) {
      res.locals.user = await prismaClient.user.findUnique({
        where: { id: decodedToken.userId },
      });

      log(LogType.INFO, `Запрос от ${req.ip} успешно авторизован`);

      next();
    }
  } catch (error) {
    console.log(error);
    if (error instanceof TokenExpiredError) {
      await refreshTokens(req, res, next, refreshToken);
    } else if (error instanceof Error) {
      log(
        LogType.ERROR,
        `Ошибка при авторизации пользователя для запроса от ${req.ip}: ${error.message}`,
      );
    }
    return res.status(401).json({ message: "Ошибка авторизации запроса" });
  }
};
