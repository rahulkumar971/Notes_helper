const express = require("express")
authControllers = require("../controllers/auth.controlls")


const Router = express.Router()

Router.post("/register",authControllers.registerUser)
Router.post("/login",authControllers.loginUser)
Router.post("/logout",authControllers.logoutUser)

module.exports = Router