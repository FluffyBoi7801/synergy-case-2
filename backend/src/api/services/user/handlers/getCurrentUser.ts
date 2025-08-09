import type { Request, Response } from "express";
import { verifyToken } from "../utils";
import { log, prismaClient } from "../../../../utils";
import { LogType } from "../../../../utils/logger";

export const getCurrentUser = async (req: Request, res: Response) => {
  const token = req.header("accessToken");

  log(
    LogType.INFO,
    `Получен запрос на получение данных текущего пользователя от ${req.ip}`,
  );

  if (token) {
    log(LogType.INFO, `Полученный токен от ${req.ip} получен из header`);

    try {
      const decodedToken = verifyToken(token);

      const user = await prismaClient.user.findUnique({
        where: { id: decodedToken.userId },
      });

      if (user) {
        log(
          LogType.INFO,
          `Запрос на текущего пользователя от ${req.ip} выполнен в базе`,
        );

        return res.status(200).json({
          user: {
            id: user.id,
            firstname: user.firstname,
            lastname: user.lastname,
          },
        });
      }
    } catch (error) {
      if (error instanceof Error) {
        log(LogType.ERROR, error.message);
      }
      return res.status(401).json({ message: "Ошибка получения пользователя" });
    }
  }
};
