-- CreateTable
CREATE TABLE `missionCommander` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `username` VARCHAR(255) NOT NULL,
    `mainStack` VARCHAR(255) NOT NULL,
    `currentEnrollment` BOOLEAN NOT NULL DEFAULT false,
    `hasAzureCertification` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `missionCommander_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
