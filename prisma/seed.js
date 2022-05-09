/* eslint-disable no-undef */
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

(async function main() {
    try {
        const woopa = await prisma.explorer.upsert({
            where: { name: "Woopa" },
            update: {},
            create: {
                name: "Woopa",
                username: "ajolonauta",
                mission: "Node"
            },
        });

        const woopa1 = await prisma.explorer.upsert({
            where: { name: "Woopa1" },
            update: {},
            create: {
                name: "Woopa1",
                username: "ajolonauta1",
                mission: "Node"
            },
        });

        const woopa2 = await prisma.explorer.upsert({
            where: { name: "Woopa 2" },
            update: {},
            create: {
                name: "Woopa 2",
                username: "ajolonauta2",
                mission: "Java"
            },
        });

        const woopa3 = await prisma.explorer.upsert({
            where: { name: "Woopa 3" },
            update: {},
            create: {
                name: "Woopa 3",
                username: "ajolonauta3",
                mission: "Node"
            },
        });

        console.log("Create 4 explorers");
    } catch(e) {
        console.error(e);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
    try {
        const mission = await prisma.mission.upsert({
            where: { name: "Node" },
            update: {},
            create: {
                name: "Node",
                lang: "JavaScript",
                missionCommander: "Woopa",
                enrollments: 1,
                hasCertification: true
            },
        });
        const mission1 = await prisma.mission.upsert({
            where: { name: "Java" },
            update: {},
            create: {
                name: "Java",
                lang: "Java",
                missionCommander: "Woopa1",
                enrollments: 1,
                hasCertification: true
            },
        });

        console.log("Create 2 missions");
    } catch(e) {
        console.error(e);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
})();