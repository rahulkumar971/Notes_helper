const mongoose = require("mongoose")

async function connectDB(){

    try {
       await mongoose.connect(process.env.MONGOOSE_URI)
        console.log("DataBase Connected Successfully")
    } catch (error) {
        console.error("DataBase not Connected ",error)

    }
}

module.exports= connectDB;