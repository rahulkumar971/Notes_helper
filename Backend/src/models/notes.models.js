const mongoose = require("mongoose")


const NotesSchema = new mongoose.Schema({

    uri:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    degree:{
        type:String,
        required:true

    },
    sem:{
        type:Number,
        required:true
    },
    notes_type:{
        type:String,
         enum:['notes','qp'],
        default: 'notes',
    },
    admin:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"student",
        required:true

    }
    
})
const notesModel = mongoose.model("Notes",NotesSchema)

module.exports = notesModel;