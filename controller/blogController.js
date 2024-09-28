const Blog = require('../models/blog')

const createBlog = async (req, res) => {
    try{
        const {title, content} = req.body
        const newBlog = new Blog({title, content, user: req.user.id});
        const responce = await newBlog.save()
        console.log('data saved')
        res.status(200).json({responce: responce})
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'internal server error'});
    }
}

const getBlogs = async (req, res) => {
    try{
        const data = await Blog.find({user: req.user.id})
        res.status(200).json({responce: data})
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'internal server error'});
    }
}

module.exports = {createBlog, getBlogs};