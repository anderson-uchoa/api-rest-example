import {PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();


async function createPost(content, user){
    const post = await prisma.post.create({
        data: {
            content,
            userId: user.id,
        },
        include: {
            author: true,
        },
    });
return post;
}

async function findPostById(id) {
    return prisma.post.findUnique({
        where: {id: Number(id)}
    });
}

async function findAllPosts() {

    const posts = await prisma.post.findMany();
    return posts;
}

async function updatePost(id, content) {

    const post = await prisma.post.update({
        where: { id: Number(id) },
        data: {content}
    });

    return post;
}
async function deletePostById(id) {

    return prisma.post.delete({where: {id: Number(id)}});
}
module.exports = {
    createPost,
    findAllPosts,
    updatePost,
    findPostById,
    deletePostById
};
