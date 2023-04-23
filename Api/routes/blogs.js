const app = require("express").Router()
let blogController = require("../controllers/blog.controller");
const {uploadImage} = require("../utilities/multer");
const upload = uploadImage("blogs")


app.get("/GetAllBlogs", blogController.getAllBlogs);
app.get("/getBlogsByCategory/:category", blogController.getBlogsByCategory);
app.post("/addNewBlog", upload.array('img'),blogController.addNewBlog)
app.post("/UpdateBlog",blogController.updateBlog)
app.delete("/deleteBlog/:userId/:blogId",blogController.deleteBlog)










module.exports = app