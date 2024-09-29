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
        const userId = req.user.id; 
        const userRole = req.user.role; 

        console.log(userId);
        console.log(userRole)


        let data;

        if (userRole === 'admin') {
            data = await Blog.find();
        } else {
            data = await Blog.find({ userId: userId });
        }
    
        res.status(200).json({response: data})
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'internal server error'});
    }
}

const updateBlog = async (req, res) => {
    try{
        const blogId = req.params.id;
        const updatedBlog = req.body;
        const data = await Blog.findOneAndUpdate({user: req.user.id, _id: blogId}, updatedBlog, {
            new: true, 
            runValidators: true
        })

        if (!data){
            return res.status(404).json({ error: 'blog not found' }) ;
        }

        console. log ('data updated') ; 
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'internal server error'});
    }
}

const deleteBlog = async (req, res) => {
    try{
        const blogId = req.params.id;
        const data = await Blog.findOneAndDelete({user: req.user.id, _id: blogId})

        if (!data){
            return res.status(404).json({ error: 'blog not found' }) ;
        }

        console. log ('deleted') ; 
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'internal server error'});
    }
}

module.exports = {createBlog, getBlogs, updateBlog, deleteBlog};