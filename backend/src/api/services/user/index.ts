import type { Request, Response } from "express";
import type { User } from "@prisma/client";
import { env, log, prismaClient, sendActivation } from "../../../utils";
import { LogType } from "../../../utils/logger";
import { hash } from "bcrypt";
import { v4 as uuid } from "uuid";
import { API_ENDPOINT } from "../../../constants";
import { API_ENDPOINTS } from "../../constants";

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
      return res.status(422).json({ message: "Запрос составлен некорректно" });
    }

    const exisitingUser = await prismaClient.user.findUnique({
      where: { email },
    });

    if (exisitingUser) {
      log(
        LogType.ERROR,
        `При регистрации пользователя с email ${email} от ${req.ip} произошла ошибка. Пользователь с таким email уже существует`,
      );
      return res
        .status(409)
        .json({ message: `Такой email уже зарегистрирован` });
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
      activationLink: `http://${env.DOMAIN_URL}${API_ENDPOINT}${API_ENDPOINTS.ACTIVATE}/${activationCode}`,
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

    return res.status(201).json({
      message: `Пользователь ${firstname} ${lastname} успешно зарегистрирован`,
    });
  },
  activate: async (req: Request, res: Response) => {
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
  },
};
