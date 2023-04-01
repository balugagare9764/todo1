const mongoose = require("mongoose")


const connectDB = ()=>{
    try {
        mongoose.set("strictQuery", true)
        mongoose.connect("mongodb+srv://balu:59w2dDsn72dynXRO@cluster0.ftbrv9a.mongodb.net/?retryWrites=true&w=majority")
        console.log("MONGO CONNECTD");
    } catch (error) {
        console.log("unable to conect" + error);
    }
}

module.exports = connectDB