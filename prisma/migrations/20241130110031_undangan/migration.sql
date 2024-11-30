/*
  Warnings:

  - A unique constraint covering the columns `[nama]` on the table `Comment` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Comment_nama_key" ON "Comment"("nama");
