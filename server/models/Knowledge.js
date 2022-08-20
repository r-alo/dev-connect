const mongoose = require('mongoose');

const knowledgeSchema = mongoose.Schema({
    knowledge: {
        type: String,
        required: true,
    }
});

const Knowledge = mongoose.model('Knowledge', knowledgeSchema);

module.exports = { Knowledge, knowledgeSchema };
