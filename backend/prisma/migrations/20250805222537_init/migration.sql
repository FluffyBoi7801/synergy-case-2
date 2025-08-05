-- CreateTable
CREATE TABLE "dev"."User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "dev"."User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "dev"."User"("email");
