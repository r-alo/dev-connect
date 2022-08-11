const mongoose = require('mongoose');

const frameworkSchema = mongoose.Schema({
    framework: {
        type: String,
        required: true,
    }
});

const Framework = mongoose.model('Framework', frameworkSchema);

module.exports = { Framework, frameworkSchema };
