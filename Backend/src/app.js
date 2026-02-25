const express = require("express")
const cookieparser = require("cookie-parser")
const authRoutes = require("./routers/auth.routes")
const notesRoutes = require("./routers/note.routes")


const app = express()
app.use(express.json());
app.use(cookieparser());

app.use("/api/auth",authRoutes)
app.use("/api/notes",notesRoutes)

module.exports = app