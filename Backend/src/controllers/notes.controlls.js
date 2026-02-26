const notesModel = require("../models/notes.models")
const {uploadFile} = require("../services/storage.service")
const jwt = require("jsonwebtoken")

async function uploadNotes (req,res){

    const token = req.cookies.token;


    if(!token){
        return res.status(401).json({message:"token not got"})
        
    }
    try{
       const decoded = jwt.verify(token,process.env.JWT_SECRECTS)

        if(decoded.role !== "admin"){
            return res.status(403).json({ message: "You dont have access to upload Notes" })
        }
    
    

        const {title, degree, sem, notes_type} = req.body;
        const file = req.file;
      
        const result = await uploadFile(file.buffer.toString('base64'),title)

        const note = await notesModel.create({
            uri:result.url,
            title,
            degree,
            sem,
            notes_type,
            admin:decoded.id
        })

           res.status(201).json({
        message:"Notes uploaded Successfully",
        note:{
            id:note._id,
            uri:note.uri,
            title:note.title,
            degree:note.degree,
            sem:note.sem,
            notes_type:note.notes_type,
            admin:note.admin,
        }
    })
}catch(err){
        console.log(err) 
            return res.status(401).json({message:"unauthorized"})
        }
    }

async function getAllNotes(req,res){
    const notes = await notesModel.find()

    
    res.status(200).json({
        message:"Notes fetched Successfully",
        notes:notes
    })
}

async function searchUser(req,res){

    try {
        const {query} = req.body;

        const filter ={
            $or :[
                {title:{$regex : query, $options:'1'}},
                {degree:{$regex : query, $options:'1'}},
                { sem: isNaN(query) ? undefined : Number(query) }
            ].filter(Boolean)
            
        }
        const filterData = await search.find(filter)

        if(filterData.length === 0){
            return res.status(404).json({message:"data not found"})
        }

        return res.status(200).json(filterData)
    } catch (error) {
        res.status(500).json({error:error})
    }
}

module.exports = {uploadNotes,getAllNotes,searchUser}