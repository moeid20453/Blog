let mongoose = require("mongoose");

let blogSchema = mongoose.Schema({
    title: String,
    content: String,
    catigory: String
})


let blogModel = mongoose.model("userblogs", blogSchema)

module.exports = blogModel;