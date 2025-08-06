import type { Request, Response } from "express";
import type { User } from "@prisma/client";
import { log, prismaClient } from "../../../utils";
import { LogType } from "../../../utils/logger";
import { generateTokens } from "./utils";
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

    const exisitingUser = await prismaClient.user.findUnique({
      where: { email },
    });

    if (exisitingUser) {
      return log(
        LogType.ERROR,
        `При регистрации пользователя с email ${email} от ${req.ip} произошла ошибка. Пользователь с таким email уже сущсетвует`,
      );
    }

    const passwordHash = await hash(password, SALT_ROUNDS);

    await prismaClient.user.create({
      data: {
        firstname,
        lastname,
        email,
        password: passwordHash,
        is_active: false,
        activation_code: uuid(),
      },
    });
  },
};
