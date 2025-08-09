import type { Request, Response, NextFunction } from "express";

export const authenticateToken = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const cookies = req;
  console.log(cookies);
  next();
};
