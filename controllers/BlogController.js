const blogService = require('../services/BlogService');

exports.getAllBlogs = async (req, res) => {
    try{
        const blog = await blogService.getAllBlogs();
        res.json({data: blog, status: 'success'});
    }catch(erro){
        //Caso ocorra um erro, será exibido na tela
        res.status(500).json({error: erro.message});
    }
};

exports.creatBlogs = async (req, res) => {
    try{
        const blog = await blogService.createBlog(req.body)
        res.json({data: blog, status: 'success'});
    }catch (erro){
        //Caso ocorra um erro, será exibido na tela
        res.status(500).json({error: erro.message});
    }
};

exports.getBlogById = async (req, res) => {
    try{
        const blog = await blogService.getBlogByid(req.params.id);
        res.json({data: blog, status: 'success'});
    }catch (erro){
        //Caso ocorra um erro, será exibido na tela
        res.status(500).json({error: erro.message});
    }
};

exports.updateBlog = async (req, res) => {
    try{
        const blog = await blogService.updateBlog(req.params.id , req.body);
        res.json({data: blog, status: 'success'});
    }catch (erro){
        //Caso ocorra um erro, será exibido na tela
        res.status(500).json({error: erro.message});
    }
};

exports.deleteBlog = async (req, res) => {
    try{
        const blog = await blogService.getBlogByid(req.params.id);
        res.json({data: blog, status: 'success'});
    }catch (erro){
        //Caso ocorra um erro, será exibido na tela
        res.status(500).json({error: erro.message});
    }
};

