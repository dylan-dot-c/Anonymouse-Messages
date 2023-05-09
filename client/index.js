import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function createUser() {
    const users = await prisma.user.findMany()
    console.log(users)
}


createUser()

