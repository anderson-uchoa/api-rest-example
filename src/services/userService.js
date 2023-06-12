import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();



async function createUser(name, email) {
    const user = await prisma.user.create({
        data: {
            name,
            email,
        },
    });

    return user;
}

async function findUserByEmail(email) {

   const user = await prisma.user.findUnique({
        where: {email}
    });

    return user;
}

async function findUserById(id) {
    return prisma.user.findUnique({
        where: {id: Number(id)}
    });
}


async function findAllUsers() {

    const users = await prisma.user.findMany();
    return users;
}

async function updateUser(id, name, email) {

    const user = await prisma.user.update({
        where: { id: Number(id) },
        data: {name, email}
    });

    return user;
}

async function deleteUserById(id) {

    return prisma.user.delete({where: {id: Number(id)}});
}
module.exports = {
    createUser,
    findAllUsers,
    deleteUserById,
    updateUser,
    findUserById,
    findUserByEmail,
};
