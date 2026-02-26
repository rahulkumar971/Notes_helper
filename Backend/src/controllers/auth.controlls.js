const userModel = require("../models/users.models")
const jwt = require("jsonwebtoken")
const bycrypt = require("bcryptjs")


async function registerUser(req,res){

    const {username, password , email,role="student"} = req.body
    
    const isUserAlreadyExits = await userModel.findOne({
        $or:[
            {username},{email}
        ]
    })
    if(isUserAlreadyExits){
        res.status(409).json({
            message:"user Already Exist"
        })
    }

    const hash = await bycrypt.hash(password,10)

    const user = await userModel.create({
        username,
        email,
        password:hash,
        role
    })

    const token = jwt.sign({
        id:user._id,
        role:user.role,
    },process.env.JWT_SECRECTS)

    res.cookie("token",token)

    res.status(201).json({
        message:"user register Successfully",
        user :{
            id:user._id,
            username : user.username,
            email:user.email,
            role:user.role,

        }
    })


}
async function loginUser(req,res){
 
    const {username,email,password} = req.body
    const student = await userModel.findOne({

        $or:[
            {username},
            {email}
        ]
    })

    if(!student){
          return res.status(401).json({message:"invalid Credentials"})
    }
    const isPasswordValid = await bycrypt.compare(password,student.password)

    if(!isPasswordValid){
        return res.status(401).json({message:"invalid Credentials"})
    }
    const token = jwt.sign({
        id:student._id,
        role:student.role,
    },process.env.JWT_SECRECTS)

    res.cookie("token",token)

    res.status(201).json({
        message:"user register Successfully",
        student :{
            id:student._id,
            username : student.username,
            email:student.email,
            role:student.role,

        }
    })

    


}
async function logoutUser(req,res){
     res.clearCookie("token")
    res.status(200).json({
        message:"User logged out Successfully"
    })
}

module.exports ={registerUser,loginUser,logoutUser}