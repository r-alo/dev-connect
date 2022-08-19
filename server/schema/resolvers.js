const { Freelancer, Language, Framework, Platform, Knowledge, Recruiter } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, params, context) => {
            if (context.user) {
                return Freelancer.findOne({ _id: context.user._id });
              }
            throw new AuthenticationError('You need to be logged in!');
        },
        language: async () => {
            return await Language.find({});
        },
        // nickname: async () => {
        //   return await Nickname.find({});
        // },
        framework: async () => {
            return await Framework.find({});
        },
        platform: async () => {
            return await Platform.find({});
        },
        freelancers: async () => {
            return await Freelancer.find({});
        },
        // freelancer: async (parent, { profileId }) => {
        //     return Freelancer.findOne({ _id: profileId });
        //   },
    },

    Mutation: {
        // addLanguageTypeScript: async () => {
        //     return await Language.create({language: 'TypeScript'})
        // },

        addFreelancer: async (parent, { firstName, lastName, phone, github, company, email, password, languages, frameworks, platforms }) => {
            const freelancer = await Freelancer.create({ firstName, lastName, phone, github, company, email, password, languages, frameworks, platforms });
            const token = signToken(freelancer);
            return { token, freelancer };
        },

        addRecruiter: async (parent, { firstName, lastName, phone, company, email, password }) => {
          const recruiter = await Recruiter.create({ firstName, lastName, phone, company, email, password });
          console.log(recruiter)
          const token = signToken(recruiter);
          return { token, recruiter };
        },

        loginFreelancer: async (parent, { email, password }) => {
            const freelancer = await Freelancer.findOne({ email });
      
            if (!freelancer) {
              throw new AuthenticationError('No freelancer with this email found!');
            }
      
            const correctPw = await freelancer.isCorrectPassword(password);
      
            if (!correctPw) {
              throw new AuthenticationError('Incorrect password!');
            }
      
            const token = signToken(freelancer);
            return { token, freelancer };
        },

        loginRecruiter: async (parent, { email, password }) => {
          const recruiter = await Recruiter.findOne({ email });
          console.log(recruiter)
    
          if (!recruiter) {
            throw new AuthenticationError('No recruiter with this email found!');
          }
    
          const correctPw = await recruiter.isCorrectPassword(password);
    
          if (!correctPw) {
            throw new AuthenticationError('Incorrect password!');
          }
    
          const token = signToken(recruiter);
          return { token, recruiter };
        },

        addLanguage: async (parent, { _id, language }) => {

            return Freelancer.findOneAndUpdate(
              { _id: _id },
              {
                $addToSet:[{languages: language}],
              },
              {
                new: true,
                runValidators: true,
              }
            );
        },

    }
}

module.exports = resolvers;