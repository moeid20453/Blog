let mongoose = require("mongoose");
let bcrypt = require("bcrypt");
let saltrounds = 5;

let userSchema = mongoose.Schema({
  userName:String,
  email: String,
  password:String,
  isActive: {
      type: Boolean , 
      default: false },
  userBlogs: [{
      type: mongoose.Types.ObjectId,
      ref: "userblogs"
  }]
})

userSchema.pre("save", async function(next) {
  this.password = await bcrypt.hash(this.password, saltrounds)
  next();  
})


let userModel = mongoose.model("users", userSchema)

module.exports = userModel