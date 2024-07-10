const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        
        const conn = await mongoose.connect("mongodb+srv://kandulaasrith:Assg1234@cluster0.65moabd.mongodb.net/Project0?retryWrites=true&w=majority&appName=Cluster0")
        console.log("Mongo DB Connected: ", conn.connection.host)
    }
    catch(err) {
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectDB