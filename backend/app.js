const express = require("express")
const app = express()

app.use(express.json())

classRouter = require("./view/class.router")
app.use("/", classRouter)

app.listen(3000, () => {
    console.log("Server listening at http://localhost:3000/")
})