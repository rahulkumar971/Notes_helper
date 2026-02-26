const express = require("express")
const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser")
const authRoutes = require("./routers/auth.routes")
const notesRoutes = require("./routers/note.routes")


const app = express()
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());

app.use("/api/auth",authRoutes)
app.use("/api/notes",notesRoutes)

module.exports = app