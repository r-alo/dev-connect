const mongoose = require('mongoose');

const nicknameSchema = mongoose.Schema({
    nickname: {
        type: String,
        required: true
    }
});

const Nickname = mongoose.model('Nickname', nicknameSchema);

module.exports = { Nickname, nicknameSchema };
