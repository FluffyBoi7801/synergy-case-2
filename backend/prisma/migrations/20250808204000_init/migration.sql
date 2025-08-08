-- CreateTable
CREATE TABLE "public"."User" (
    "id" TEXT NOT NULL,
    "tag" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "password" TEXT NOT NULL,
    "lastlogin" TIMESTAMP(3),
    "lastip" TEXT,
    "access_token" TEXT,
    "refresh_token" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "is_active" BOOLEAN NOT NULL DEFAULT false,
    "activation_code" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "public"."User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_tag_key" ON "public"."User"("tag");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "public"."User"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "User_access_token_key" ON "public"."User"("access_token");

-- CreateIndex
CREATE UNIQUE INDEX "User_refresh_token_key" ON "public"."User"("refresh_token");

-- CreateIndex
CREATE UNIQUE INDEX "User_activation_code_key" ON "public"."User"("activation_code");
