const mongoose = require("mongoose")
 
const blogSchma = mongoose.Schema({
    title:String,
    desc:String
})

module.exports = mongoose.model("blog" ,blogSchma)