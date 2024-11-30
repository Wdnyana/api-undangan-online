-- CreateTable
CREATE TABLE "Comment" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Undangan" (
    "id" SERIAL NOT NULL,
    "namaundangan" TEXT NOT NULL,

    CONSTRAINT "Undangan_pkey" PRIMARY KEY ("id")
);
