const app = require("express").Router()
let blogController = require("../controllers/blog.controller")

app.get("/GetAllBlogs", blogController.getAllBlogs);
app.get("/getBlogsByCategory/:category", blogController.getBlogsByCategory);
app.post("/addNewBlog/:userId",blogController.addNewBlog)
app.post("/UpdateBlog",blogController.updateBlog)
app.delete("/deleteBlog/:userId/:blogId",blogController.deleteBlog)










module.exports = app