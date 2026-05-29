const express = require("express")
const cors = require("cors")
const app = express()
const connectDB = require("./config/database")
app.use(express.json())
app.use(cors())
connectDB()

const classRouter = require("./view/class.router")
app.use("/classes", classRouter)

app.listen(3000, () => {
    console.log("Server listening at http://localhost:3000/")
})