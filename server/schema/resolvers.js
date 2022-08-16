const { Freelancer, Language, Framework, Platform, Knowledge } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        language: async () => {
            return await Language.find({});
        },
        framework: async () => {
            return await Framework.find({});
        },
        platform: async () => {
            return await Platform.find({});
        },
        freelancers: async () => {
            return await Freelancer.find({});
        },
        freelancer: async (parent, { profileId }) => {
            return Freelancer.findOne({ _id: profileId });
          },
    },

    Mutation: {
        // addLanguageTypeScript: async () => {
        //     return await Language.create({language: 'TypeScript'})
        // },

        addProfile: async (parent, { firstName, lastName, phone, github, company, email, password, languages, frameworks, platforms }) => {
            const profile = await Freelancer.create({ firstName, lastName, phone, github, company, email, password, languages, frameworks, platforms });
            const token = signToken(profile);
        
            return profile ;
        },
        login: async (parent, { email, password }) => {
            const profile = await Freelancer.findOne({ email });
      
            if (!profile) {
              throw new AuthenticationError('No profile with this email found!');
            }
      
            const correctPw = await profile.isCorrectPassword(password);
      
            if (!correctPw) {
              throw new AuthenticationError('Incorrect password!');
            }
      
            const token = signToken(profile);
            return { token, profile };
          },
    }
}

module.exports = resolvers;