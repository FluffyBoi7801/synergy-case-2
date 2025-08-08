import type { Request, Response } from "express";
import type { User } from "@prisma/client";
import { env, log, prismaClient } from "../../../../utils";
import { LogType } from "../../../../utils/logger";
import { generateTokens } from "../utils";

export const loginHandler = async (
  req: Request<any, any, Pick<User, "email" | "password">>,
  res: Response,
) => {
  const { email, password } = req.body;
  log(
    LogType.INFO,
    `Получен запрос на авторизацию пользователя с email ${email} от ${req.ip}`,
  );

  if (!email || !password) {
    log(
      LogType.ERROR,
      `Получен некорректный запрос на авторизацию пользователя с email ${email} от ${req.ip}`,
    );
    return res.status(422).json({ message: "Запрос составлен некорректно" });
  }

  const user = await prismaClient.user.findUnique({ where: { email } });

  if (!user) {
    log(
      LogType.ERROR,
      `При авторизации пользователя с email ${email} от ${req.ip} произошла ошибка. Пользователь не найден`,
    );
    return res
      .status(404)
      .json({ message: "Пользователь с таким email не найден" });
  }

  if (!user.is_active) {
    log(
      LogType.ERROR,
      `При авторизации пользователя с email ${email} от ${req.ip} произошла ошибка. Пользователь не активирован`,
    );
    return res.status(401).json({ message: "Пользователь не активирован" });
  }

  try {
    const tokens = generateTokens({ userId: user.id });

    await prismaClient.user.update({
      where: { id: user.id },
      data: {
        refresh_token: tokens.refreshToken,
      },
    });

    return res
      .status(200)
      .cookie("refreshToken", tokens.refreshToken, {
        httpOnly: true,
        secure: env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      })
      .send();
  } catch (error) {
    if (error instanceof Error) {
      log(LogType.ERROR, error.message);
    }
    return res.status(401).json({ message: "Ошибка авторизации" });
  }
};
