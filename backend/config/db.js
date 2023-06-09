const dotenv = require("dotenv")
const mongoose = require("mongoose")

dotenv.config()

const connectDB = async () => {
    try{
        const conn = await mongoose.connect("", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        console.log(`MongoDB Connected ${conn.connection.host}`)
    }catch(error){
        console.log(`Error: ${error.message}`.red.bold)
        console.log(process.env.MONGO_URI)
        process.exit()
    }
}

module.exports = connectDB
