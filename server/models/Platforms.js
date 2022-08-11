const mongoose = require('mongoose');

const platformSchema = mongoose.Schema({
    platform: {
        type: String,
        required: true,
    }
});

const Platform = mongoose.model('Platform', platformSchema);

module.exports = { Platform, platformSchema };
