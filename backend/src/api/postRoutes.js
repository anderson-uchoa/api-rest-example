const postController = require('../controllers/postController');

const express = require('express');
const router = express.Router();

router.post('/post/user/:id', postController.createPost);
router.get('/posts', postController.findAllPosts);
router.put('/post/:id', postController.updatePost);
router.delete('/post/:id', postController.deletePost);


module.exports = router;