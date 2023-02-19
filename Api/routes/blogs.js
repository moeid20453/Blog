const app = require("express").Router()
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
let blogController = require("../controllers/blog.controller")

app.get("/GetAllBlogs", blogController.getAllBlogs);
app.get("/getBlogsByCategory/:category", blogController.getBlogsByCategory);
app.post("/addNewBlog/:userId", upload.single('file'),blogController.addNewBlog)
app.post("/UpdateBlog",blogController.updateBlog)
app.delete("/deleteBlog/:userId/:blogId",blogController.deleteBlog)










module.exports = app