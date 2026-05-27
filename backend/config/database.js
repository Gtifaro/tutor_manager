const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Mongo conectado")
    } catch (error) {
        console.log("Error al conectar con mongo", error)
        return null
    }
}

module.exports = connectDB