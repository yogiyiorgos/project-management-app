const mongoose = require('mongoose')

// Function to asynchronously connect to a MongoDB database and log a message upon a succesful connection
const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI)

    console.log(`MongoDB Connected: ${conn.connection.host}`)
}

module.exports = connectDB