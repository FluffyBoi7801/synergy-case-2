/*
  Warnings:

  - A unique constraint covering the columns `[access_token]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[refresh_token]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[activation_code]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `access_token` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `activation_code` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `is_active` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastip` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastlogin` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `refresh_token` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "dev"."User" ADD COLUMN     "access_token" TEXT NOT NULL,
ADD COLUMN     "activation_code" TEXT NOT NULL,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "is_active" BOOLEAN NOT NULL,
ADD COLUMN     "lastip" TEXT NOT NULL,
ADD COLUMN     "lastlogin" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "refresh_token" TEXT NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_access_token_key" ON "dev"."User"("access_token");

-- CreateIndex
CREATE UNIQUE INDEX "User_refresh_token_key" ON "dev"."User"("refresh_token");

-- CreateIndex
CREATE UNIQUE INDEX "User_activation_code_key" ON "dev"."User"("activation_code");
