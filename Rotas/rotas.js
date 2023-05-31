const express = require('express');
const {getAllBlogs, creatBlogs, getBlogById, updateBlog, deleteBlog} = require('../controllers/BlogController')
const router = express.Router();

router.route('/').get(getAllBlogs).post(creatBlogs)
router.route('/:id').get(getBlogById).put(updateBlog).delete(deleteBlog);

module.exports = router;