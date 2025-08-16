import type { Request, Response } from "express";
import { env, log, prismaClient } from "../../../../utils";
import { LogType } from "../../../../utils/logger";

export const logoutHandler = async (req: Request, res: Response) => {
  const { id: userId } = res.locals.user;
  log(LogType.INFO, `Получен запрос на логаут пользователя ${userId}`);

  if (!userId) {
    log(LogType.ERROR, `Запрос на логаут от ${req.ip} имеет невалидный токен`);
    return res.status(422).json({ message: "Токен невалиден" });
  }

  try {
    await prismaClient.user.update({
      where: { id: userId },
      data: { refresh_token: null },
    });
  } catch (error) {
    if (error instanceof Error) {
      log(
        LogType.ERROR,
        `Ошибка при удалении токена пользователя ${userId}: ${error.message}`,
      );
      return res.status(500).json({ message: "Произошла внутренняя ошибка" });
    }
  }

  return res
    .status(200)
    .cookie("accessToken", "", {
      httpOnly: true,
      secure: env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: -1,
    })
    .cookie("refreshToken", "", {
      httpOnly: true,
      secure: env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: -1,
    })
    .json({ message: "Logout successful" });
};
