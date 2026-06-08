const mongoose = require("mongoose")

const classSchema = new mongoose.Schema({
    date: String,
    number: Number,
    group: String,
    name: String,
})

module.exports = mongoose.model("classModel", classSchema)