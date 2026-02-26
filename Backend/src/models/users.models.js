const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    
    username :{ 
    type: String,
    required : true,
    unique:true
     },

     password:{
        type:String,
        required:true,
        unique:true
     },
     
     email:{
        type:String,
        required:true,
        unique:true
     },
     role:{
        type:String,
        enum:["student","admin"],
         default:"student"
     }

   
})
// const AcdemicSchema = new mongoose.Schema({
    
//    collegeName :{ 
//     type: String,
//     required : true,
//     unique:true
//      },

//      year:{
//         type:String,
//         required:true,
//         unique:true
//      },
     
//      mobileNo:{
//         type:String,
//         required:true,
//         unique:true
//      },
    

   
// })
 const userModel = mongoose.model("student",userSchema)

 module.exports = userModel;