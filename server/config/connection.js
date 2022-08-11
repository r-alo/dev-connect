const mongoose = require('mongoose');

const connectionURI = "mongodb://localhost:27017";

const connection = async () => {
    await mongoose.connect(connectionURI);
    console.log("Mongoose connection successful!");
}

module.exports = connection;