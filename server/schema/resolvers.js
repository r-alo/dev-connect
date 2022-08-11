const { Freelancer, Language, Framework, Platform, Knowledge } = require('../models');

const resolvers = {
    Query: {
        language: async () => {
            return await Language.find({});
        },
        framework: async () => {
            await Framework.find({});
        }
    }
};

module.export = resolvers;