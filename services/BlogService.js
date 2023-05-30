const blogModel = require('../models/blog');

exports.getAllBlogs = async () => {
    return await blogModel.find()
};
//Create a new blog
exports.createBlog = async (blog) => {
    return await blogModel.create(blog)
};

//Read Blog
exports.getBlogByid = async (id) => {
    return await blogModel.findById(id)
};

//Update a blog
exports.updateBlog = async (id, blog) => {
    return await blogModel.findByIdAndUpdate(blog)
};

//Delete a blog

exports.deleteBlog = async (id) => {
    return await blogModel.findByIdAnddelete(id)
};
