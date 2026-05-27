const mongoose = require("mongoose")

const classSchema = new mongoose.Schema({
    test: String
})

module.exports = mongoose.model("classModel", classSchema)