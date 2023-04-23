let mongoose = require("mongoose");

let blogSchema = mongoose.Schema({
  userid: String,
  title: String,
  content: String,
  cat: String,
  date: String,
  img: Object,
});

let blogModel = mongoose.model("userblogs", blogSchema);

module.exports = blogModel;
