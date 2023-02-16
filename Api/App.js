let express = require('express');
const app = express();
let bodyParser = require("body-parser");
require("dotenv").config();
const sessionAuth = require('./helpers/sessoin.auth');
const cors = require("cors");
let { handleCorsPolicy } = require("./helpers/cors")

let connection = require("./connection/db.connection");
connection();
let userRoutes = require("./routes/users");
let blogRoutes = require("./routes/blogs")


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json())


app.use(cors());
app.use(handleCorsPolicy);
app.use(sessionAuth);
app.use('/api/', userRoutes);
app.use(blogRoutes);



app.listen(process.env.PORT,()=>{
  console.log("connected")
})