require("dotenv").config()

const express = require("express")
const cors = require("cors")
const connectDB = require("./config/db")
const studentRoutes = require("./routes/studentRoutes")

const app = express()

app.use(cors())
app.use(express.json())

connectDB()

app.use(studentRoutes)

app.listen(process.env.PORT, ()=>{
 console.log("Server running on port " + process.env.PORT)
})