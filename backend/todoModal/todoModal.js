const mongoose = require("mongoose")

const todoSchma = mongoose.Schema({
    title:String,
    desc:String,
    priority:Number
})

module.exports = mongoose.model("todo",todoSchma)