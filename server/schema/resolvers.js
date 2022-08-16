const { Freelancer, Language, Framework, Platform, Knowledge } = require('../models');

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
        freelancer: async () => {
            return await Freelancer.find({});
        }
    },

    Mutation: {
        addLanguageTypeScript: async () => {
            return await Language.create({language: 'TypeScript'})
        }
    }
};

module.exports = resolvers;