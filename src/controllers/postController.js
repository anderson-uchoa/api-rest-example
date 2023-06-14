
const postService = require('../services/postService');
const userService = require('../services/userService');


async function createPost(req, res) {
    const { content } = req.body;
    const { id } = req.params;

    try {
        const user = await userService.findUserById(id);

        if (!user) {
            return res.json({
                success: false,
                data: {},
                message: "Could not find this user",
            });
        }

        const post = await postService.createPost(content, user);

        return res.json({
            success: true,
            data: post,
            message: "Post created successfully",
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

async function findAllPosts(req, res) {
    try {
        const posts = await postService.findAllPosts();

        return res.json({
            success: true,
            data: posts,
            message: "Posts found successfully",
        });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

async function updatePost(req, res) {
    const { id } = req.params;
    const { content } = req.body;
    try {
        let post = await postService.findPostById(id);

        if (!post) {
            return res.json({
                success: false,
                data: {},
                message: "This post not exists",
            });
        }

        post = await postService.updatePost(id, content);

        return res.json({
            success: true,
            data: post,
            message: "Posts updated successfully",
        });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}


module.exports = {
    createPost,
    findAllPosts,
    updatePost,
};
