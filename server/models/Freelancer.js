const mongoose = require('mongoose');

const { languageSchema } = require('Language')

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [2, "the minimum length is 6 characters!"],
        maxLength: [20, "the maximum length is 20 characters!"],
        trim: true,
        validate: {
            validator: (v) => /^[a-zA-Z0-9](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Z0-9]){6,18}[a-zA-Z0-9]$/.test(v),
        },
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    github: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    language: [languageSchema],

});


const User = mongoose.model('User', userSchema);

module.exports = User;
