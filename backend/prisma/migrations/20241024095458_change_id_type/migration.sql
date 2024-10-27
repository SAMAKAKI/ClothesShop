/*
  Warnings:

  - The primary key for the `Brand` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Color` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Product` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Review` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `SizeOfBoots` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `SizeOfClothing` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Changed the type of `id` on the `Brand` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `Color` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `Product` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `Review` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `productId` on the `Review` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `SizeOfBoots` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `SizeOfClothing` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `A` on the `_ProductColors` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `B` on the `_ProductColors` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `A` on the `_SizesOfBoots` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `B` on the `_SizesOfBoots` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `A` on the `_SizesOfClothing` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `B` on the `_SizesOfClothing` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_productId_fkey";

-- DropForeignKey
ALTER TABLE "_ProductColors" DROP CONSTRAINT "_ProductColors_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProductColors" DROP CONSTRAINT "_ProductColors_B_fkey";

-- DropForeignKey
ALTER TABLE "_SizesOfBoots" DROP CONSTRAINT "_SizesOfBoots_A_fkey";

-- DropForeignKey
ALTER TABLE "_SizesOfBoots" DROP CONSTRAINT "_SizesOfBoots_B_fkey";

-- DropForeignKey
ALTER TABLE "_SizesOfClothing" DROP CONSTRAINT "_SizesOfClothing_A_fkey";

-- DropForeignKey
ALTER TABLE "_SizesOfClothing" DROP CONSTRAINT "_SizesOfClothing_B_fkey";

-- AlterTable
ALTER TABLE "Brand" DROP CONSTRAINT "Brand_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
ADD CONSTRAINT "Brand_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Color" DROP CONSTRAINT "Color_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
ADD CONSTRAINT "Color_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Product" DROP CONSTRAINT "Product_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
ADD CONSTRAINT "Product_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Review" DROP CONSTRAINT "Review_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
DROP COLUMN "productId",
ADD COLUMN     "productId" UUID NOT NULL,
ADD CONSTRAINT "Review_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "SizeOfBoots" DROP CONSTRAINT "SizeOfBoots_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
ADD CONSTRAINT "SizeOfBoots_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "SizeOfClothing" DROP CONSTRAINT "SizeOfClothing_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
ADD CONSTRAINT "SizeOfClothing_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "_ProductColors" DROP COLUMN "A",
ADD COLUMN     "A" UUID NOT NULL,
DROP COLUMN "B",
ADD COLUMN     "B" UUID NOT NULL;

-- AlterTable
ALTER TABLE "_SizesOfBoots" DROP COLUMN "A",
ADD COLUMN     "A" UUID NOT NULL,
DROP COLUMN "B",
ADD COLUMN     "B" UUID NOT NULL;

-- AlterTable
ALTER TABLE "_SizesOfClothing" DROP COLUMN "A",
ADD COLUMN     "A" UUID NOT NULL,
DROP COLUMN "B",
ADD COLUMN     "B" UUID NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "_ProductColors_AB_unique" ON "_ProductColors"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductColors_B_index" ON "_ProductColors"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_SizesOfBoots_AB_unique" ON "_SizesOfBoots"("A", "B");

-- CreateIndex
CREATE INDEX "_SizesOfBoots_B_index" ON "_SizesOfBoots"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_SizesOfClothing_AB_unique" ON "_SizesOfClothing"("A", "B");

-- CreateIndex
CREATE INDEX "_SizesOfClothing_B_index" ON "_SizesOfClothing"("B");

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductColors" ADD CONSTRAINT "_ProductColors_A_fkey" FOREIGN KEY ("A") REFERENCES "Color"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductColors" ADD CONSTRAINT "_ProductColors_B_fkey" FOREIGN KEY ("B") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SizesOfClothing" ADD CONSTRAINT "_SizesOfClothing_A_fkey" FOREIGN KEY ("A") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SizesOfClothing" ADD CONSTRAINT "_SizesOfClothing_B_fkey" FOREIGN KEY ("B") REFERENCES "SizeOfClothing"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SizesOfBoots" ADD CONSTRAINT "_SizesOfBoots_A_fkey" FOREIGN KEY ("A") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SizesOfBoots" ADD CONSTRAINT "_SizesOfBoots_B_fkey" FOREIGN KEY ("B") REFERENCES "SizeOfBoots"("id") ON DELETE CASCADE ON UPDATE CASCADE;
