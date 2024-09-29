const express = require('express')
const router = express.Router();
const {createBlog, getBlogs, updateBlog, deleteBlog} = require('../controller/blogController')
const {jwtAuthMiddleware} = require('../middleware/auth')

router.post('/create', jwtAuthMiddleware, createBlog);

router.get('/getblogs', jwtAuthMiddleware, getBlogs);

router.put('/update/:id', jwtAuthMiddleware, updateBlog);

router.delete('/delete/:id', jwtAuthMiddleware, deleteBlog);


module.exports = router;