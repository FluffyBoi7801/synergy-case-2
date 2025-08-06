import type { Request, Response } from "express";

export const userService = {
  register: async (req: Request, res: Response) => {
    const { email, password } = req.body;
  },
};
