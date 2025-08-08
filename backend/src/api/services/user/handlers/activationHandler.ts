import type { Request, Response } from "express";
import { log, prismaClient } from "../../../../utils";
import { LogType } from "../../../../utils/logger";

export const activationHandler = async (req: Request, res: Response) => {
  const uuid = req.params.uuid;
  log(
    LogType.INFO,
    `Получен запрос на активацию пользователя с uuid ${uuid} от ${req.ip}`,
  );

  const user = await prismaClient.user.findUnique({
    where: { activation_code: uuid },
  });

  if (!user) {
    log(
      LogType.ERROR,
      `При активации пользователя с uuid ${uuid} от ${req.ip} произошла ошибка. Пользователь не найден`,
    );
    return res.status(404).json({ message: "Пользователь не найден" });
  } else if (user.is_active) {
    log(
      LogType.ERROR,
      `При активации пользователя с uuid ${uuid} от ${req.ip} произошла ошибка. Пользователь уже активирован`,
    );
    return res.status(409).json({ message: "Пользователь уже активирован" });
  }

  await prismaClient.user
    .update({
      where: { id: user.id },
      data: { is_active: true, activation_code: null },
    })
    .catch(() => {
      log(
        LogType.ERROR,
        `Ошибка при обновлении записи пользователя с uuid ${uuid} при запросе от ${req.ip}`,
      );
      return res
        .status(500)
        .json({ message: "При активации произошла ошибка" });
    });

  log(
    LogType.INFO,
    `Запись пользователя с uuid ${uuid} успешно обновлена при запросе от ${req.ip}`,
  );

  return res.status(202).json({ message: "Пользователь активирован" });
};
