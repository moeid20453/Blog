const app = require("express").Router();
let userController = require("../controllers/user.controller")
let { addUserValidation } = require("../validation/user.validation")
let validator = require('../helpers/common.validate')
let { checkSession } = require('../utilities/checkAuth')
let { verifyToken } = require("../utilities/token.util")

app.get("/activateUser/:token",  userController.activateUser);
app.post("/updateUser/:id", userController.updateUser);
app.post("/Login", userController.Login);
app.post("/Register",validator(addUserValidation), userController.Register);
app.post("/Logout", userController.Logout);



module.exports = app