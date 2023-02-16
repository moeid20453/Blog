const app = require("express").Router()
let blogController = require("../controllers/blog.controller")

app.get("/getBlogsByTitle/:title",blogController.getBlogsByTitle)
app.post("/addNewBlog/:userId",blogController.addNewBlog)
app.post("/UpdateBlog",blogController.updateBlog)
app.delete("/deleteBlog/:userId/:blogId",blogController.deleteBlog)










module.exports = app