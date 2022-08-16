const mongoose = require('mongoose');
const bcrypt = require ('bcryptjs')

const { languageSchema } = require('./Languages');
const { frameworkSchema } = require('./Frameworks');
const { platformSchema } = require('./Platforms');
const { knowledgeSchema } = require('./Knowledge');

const freelancerSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [2, "the minimum length is 6 characters!"],
        maxLength: [20, "the maximum length is 20 characters!"],
        trim: true,
        validate: {
            validator: (v) => /^[a-zA-Z]{2,20}$/.test(v),
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
    languages: [languageSchema],
    frameworks: [frameworkSchema],
    platforms: [platformSchema],
    knowledge: [knowledgeSchema],
});

freelancerSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      this.password = await bcrypt.hash(this.password, 10);
      console.log(this.password)
    }
  
    next();
  });
  
freelancerSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };

const Freelancer = mongoose.model('Freelancer', freelancerSchema);

module.exports = Freelancer;
