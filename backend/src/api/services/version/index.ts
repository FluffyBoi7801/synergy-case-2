import type { Request, Response } from "express";
import { execSync } from "child_process";
import { prismaClient } from "../../../utils";

export const versionService = {
  getServiceVersion: async (req: Request, res: Response) => {
    console.log(
      `Получен запрос на получение версии от клиента ${req.ip} в ${new Date()}`,
    );

    const fignya = prismaClient.user.findMany();

    console.log(fignya);

    const revision = execSync("git rev-parse HEAD").toString().trim();
    res.status(200).json({ version: revision });
  },
};
