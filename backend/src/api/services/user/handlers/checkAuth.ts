import type { Request, Response } from "express";
import { log } from "../../../../utils";
import { LogType } from "../../../../utils/logger";

export const checkAuth = async (req: Request, res: Response) => {
  log(LogType.INFO, `Получен запрос на проверку авторизации от ${req.ip}`);

  return res.status(200).json({
    isAuthenticated: true,
  });
};
