import type { Request, Response } from "express";
import { execSync } from "child_process";
import { log } from "../../../utils";
import { LogType } from "../../../utils/logger";

export const versionService = {
  getServiceVersion: async (req: Request, res: Response) => {
    log(
      LogType.INFO,
      `Получен запрос на получение версии от клиента ${req.ip}`,
    );

    const revision = execSync("git rev-parse HEAD").toString().trim();
    res.status(200).json({ version: revision });
  },
};
