const mongoose = require("mongoose")


const connectDB = ()=>{
    try {
        mongoose.set("strictQuery", true)
        mongoose.connect(process.env.MONGO_URL)
        console.log("MONGO CONNECTD");
    } catch (error) {
        console.log("unable to conect" + error);
    }
}

module.exports = connectDB