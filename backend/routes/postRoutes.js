const express = require('express');
const router = express.Router();
const { createPost, getPosts, getPost, updatePost, deletePost } = require('../controllers/postController');
const { protect } = require('../middleware/authMiddleware'); 

// Route for creating a new post (requires authentication)
router.post('/', protect, createPost);

// Route for getting all posts
router.get('/', getPosts);

// Route for getting a single post by ID
router.get('/:id', getPost);

// Route for updating a post (requires authentication)
router.put('/:id', protect, updatePost);

// Route for deleting a post (requires authentication)
router.delete('/:id', protect, deletePost);

module.exports = router;
