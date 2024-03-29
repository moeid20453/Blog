let Blog = require("../model/blog.model");
let User = require("../model/user.model");

let getAllBlogs = async (req, res) => {
  let allBlogs = await Blog.find({});
  if (allBlogs) {
    res.status(200).json({ allBlogs });
  } else res.status(502).json({ message: "there is no blogs" });
};

let getBlogsByCategory = async (req, res) => {
  const blogcat = req.params.category;
  if (blogcat) {
    let blogs = await Blog.find({ cat: blogcat });
    if (blogs) {
      res.status(200).json({ blogs });
    } else {
      res
        .status(404)
        .json({ message: "There are no blogs with this category" });
    }
  }
};

let addNewBlog = async (req, res) => {
  let image = req.files;
  console.log({image: image});
  const blog = await new Blog({title:req.body.title,content:req.body.content, cat: req.body.cat, date:req.body.date, img: image});
  await blog.save();
  // await Blog.findByIdAndUpdate(blog._id,{image: image[0]})
  await User.findByIdAndUpdate(
    { _id: req.body.userid },
    { $push: { userBlogs: blog._id } }
  );
  res.status(200).json({ message: "success", blog });
};

let updateBlog = async (req, res) => {
  const targetblog = req.body.blogId;
  let { title, content } = req.body;
  await Blog.findByIdAndUpdate({ _id: targetblog }, { title, content });
  res.status(200).json({ message: "success", user });
};

let deleteBlog = async (req, res) => {
  const targetblogId = req.params.blogId;
  const targetuserId = req.params.userId;

  await Blog.findByIdAndDelete({ _id: targetblogId });
  await User.findByIdAndUpdate(
    { _id: targetuserId },
    { $pull: { userBlogs: targetblogId } }
  );
  res.status(201).json({ message: "success" });
};

module.exports = {
  getAllBlogs,
  getBlogsByCategory,
  addNewBlog,
  updateBlog,
  deleteBlog,
};
