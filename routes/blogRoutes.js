const express = require('express')
const router = express.Router();
const {createBlog, getBlogs} = require('../controller/blogController')
const {jwtAuthMiddleware} = require('../middleware/auth')

router.post('/create', jwtAuthMiddleware, createBlog);

router.get('/getblogs', jwtAuthMiddleware, getBlogs);


module.exports = router;