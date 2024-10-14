/*
  Warnings:

  - You are about to drop the column `link` on the `userProfile` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `userProfile` DROP COLUMN `link`;

-- CreateTable
CREATE TABLE `Link` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `platform` VARCHAR(191) NOT NULL,
    `link` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Link` ADD CONSTRAINT `Link_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `userProfile`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
