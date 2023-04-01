const express = require("express")
const connetDB = require("./config/db")
const cors = require("cors")
const app = express()
const todoRoute = require("./todoRoute/todoRoute")
const blogRoute = require("./todoRoute/blogRoute")
connetDB()

//body parser
app.use(express.json())
app.use(cors())


app.use("/todo",todoRoute)
app.use("/blog",blogRoute)

app.listen(5000,(err)=>{
  if (err) {
    console.log("unable to start server" + err) ;
  } else {
    console.log("SEREVER RUNNING http://localhost:5000");
  }
})