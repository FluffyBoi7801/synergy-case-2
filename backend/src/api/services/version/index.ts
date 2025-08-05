import type { Request, Response } from "express";
import { execSync } from "child_process";
import { prismaClient } from "../../../utils";

export const versionService = {
  getServiceVersion: async (req: Request, res: Response) => {
    console.log(
      `Получен запрос на получение версии от клиента ${req.ip} в ${new Date()}`,
    );

    prismaClient.user.findMany().then((user) => {
      console.log(user);
    });

    const revision = execSync("git rev-parse HEAD").toString().trim();
    res.status(200).json({ version: revision });
  },
};
