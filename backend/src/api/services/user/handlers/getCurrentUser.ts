import type { Request, Response } from "express";
import { log } from "../../../../utils";
import { LogType } from "../../../../utils/logger";

export const getCurrentUser = async (req: Request, res: Response) => {
  const userData = res.locals.user;

  log(
    LogType.INFO,
    `Получен запрос на получение данных текущего пользователя от ${req.ip}`,
  );

  if (!userData) {
    return res.status(500).json({ message: "Произошла внутренняя ошибка" });
  }

  return res.status(200).json({
    id: userData.id,
    firstName: userData.firstname,
    lastName: userData.lastname,
  });
};
