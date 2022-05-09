-- CreateTable
CREATE TABLE `Mission` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `lang` VARCHAR(50) NOT NULL,
    `missionCommander` VARCHAR(255) NOT NULL,
    `enrollments` INTEGER NOT NULL DEFAULT 0,
    `hasCertification` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `Mission_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
