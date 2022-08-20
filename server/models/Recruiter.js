const mongoose = require('mongoose');
const bcrypt = require ('bcryptjs')

const recruiterSchema = mongoose.Schema({
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
    company: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        default: 'recruiter'
    },
});

recruiterSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      this.password = await bcrypt.hash(this.password, 10);
      console.log(this.password)
    }
  
    next();
  });
  
recruiterSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };

const Recruiter = mongoose.model('Recruiter', recruiterSchema);

module.exports = Recruiter;
