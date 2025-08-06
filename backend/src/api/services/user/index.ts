import type { Request, Response } from "express";
import type { User } from "@prisma/client";
import { env, log, prismaClient, sendActivation } from "../../../utils";
import { LogType } from "../../../utils/logger";
import { hash } from "bcrypt";
import { v4 as uuid } from "uuid";

const SALT_ROUNDS = 10;

export const userService = {
  register: async (
    req: Request<
      any,
      any,
      Pick<User, "firstname" | "lastname" | "email" | "password">
    >,
    res: Response,
  ) => {
    const { firstname, lastname, email, password } = req.body;
    log(
      LogType.INFO,
      `Получен запрос на регистрацию нового пользователя с email ${email} от ${req.ip}`,
    );

    if (!firstname || !lastname || !email || !password) {
      log(LogType.ERROR, `Получен некорректный запрос на регистрацию`);
      return res.status(422);
    }

    const exisitingUser = await prismaClient.user.findUnique({
      where: { email },
    });

    if (exisitingUser) {
      log(
        LogType.ERROR,
        `При регистрации пользователя с email ${email} от ${req.ip} произошла ошибка. Пользователь с таким email уже сущсетвует`,
      );
      return res.status(409);
    }

    const passwordHash = await hash(password, SALT_ROUNDS);
    const activationCode: string = uuid();

    await prismaClient.user
      .create({
        data: {
          firstname: firstname,
          lastname: lastname,
          email: email,
          password: passwordHash,
          activation_code: activationCode,
        },
      })
      .then(() => {
        log(
          LogType.INFO,
          `Пользователь с email ${email} успешно записан в базу`,
        );
      })
      .catch(() => {
        log(LogType.ERROR, `Ошибка регистрации пользователя с email ${email}`);
      });

    await sendActivation({
      to: email,
      name: `${firstname} ${lastname}`,
      activationLink: `http://${env.DOMAIN_URL}/api/activation/${activationCode}`,
    })
      .then(() => {
        log(
          LogType.INFO,
          `Пользователю с email ${email} успешно отправлена ссылка активации`,
        );
      })
      .catch(() => {
        log(
          LogType.ERROR,
          `Ошибка при отправке письма активации пользователю с email ${email}`,
        );
      });

    return res.status(201);
  },
};
