import { PrismaClient } from "@prisma/client";

export const prismaClient = new PrismaClient();

process.on("beforeExit", async () => {
  await prismaClient.$disconnect();
});
