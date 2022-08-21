const mongoose = require('mongoose');

const connectionURI = process.env.MONGODB_URI || "mongodb://localhost:27017/dev-connect";

const connection = async () => {
    await mongoose.connect(connectionURI);
    console.log("Mongoose connection successful!");
}

module.exports = connection;