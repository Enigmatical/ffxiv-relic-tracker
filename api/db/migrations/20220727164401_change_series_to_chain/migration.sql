/*
  Warnings:

  - You are about to drop the column `seriesId` on the `Quest` table. All the data in the column will be lost.
  - You are about to drop the column `seriesId` on the `Relic` table. All the data in the column will be lost.
  - You are about to drop the `Series` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `chainId` to the `Quest` table without a default value. This is not possible if the table is not empty.
  - Added the required column `chainId` to the `Relic` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Quest" DROP CONSTRAINT "Quest_seriesId_fkey";

-- DropForeignKey
ALTER TABLE "Relic" DROP CONSTRAINT "Relic_seriesId_fkey";

-- AlterTable
ALTER TABLE "Quest" DROP COLUMN "seriesId",
ADD COLUMN     "chainId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Relic" DROP COLUMN "seriesId",
ADD COLUMN     "chainId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Series";

-- CreateTable
CREATE TABLE "Chain" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "description" TEXT,
    "reference" TEXT,

    CONSTRAINT "Chain_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Relic" ADD CONSTRAINT "Relic_chainId_fkey" FOREIGN KEY ("chainId") REFERENCES "Chain"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Quest" ADD CONSTRAINT "Quest_chainId_fkey" FOREIGN KEY ("chainId") REFERENCES "Chain"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
