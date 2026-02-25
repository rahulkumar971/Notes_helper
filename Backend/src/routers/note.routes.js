const express = require("express")
const multer = require("multer")
notescontroller = require("../controllers/notes.controlls")


const Router = express.Router()
const upload = multer({
    storage:multer.memoryStorage()
})


Router.post("/upload",upload.single("note"),notescontroller.uploadNotes)

module.exports = Router