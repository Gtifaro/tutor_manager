const express = require("express")
const app = express()
const connectDB = require("./config/database")
app.use(express.json())

connectDB()

const classRouter = require("./view/class.router")
app.use("/classes", classRouter)

app.listen(3000, () => {
    console.log("Server listening at http://localhost:3000/")
})