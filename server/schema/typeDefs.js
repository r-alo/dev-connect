const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Language {
        _id: ID!
        language: String!
    }

    type Framework {
        _id: ID!
        framework: String!
    }

    type Platform {
        _id: ID!
        platform: String!
    }

    type Knowledge {
        _id: ID!
        knowledge: String!
    }

    type Freelancer {
        firstName: String!
        lastName: String!
        email: String!
        phone: String!
        github: String!
        languages: [Language]
    }

    type Query {
        language: [Language]
        framework: [Framework]
        platform: [Platform]
        freelancer: [Freelancer]
    }

    type Mutation {
        addLanguageTypeScript: Language
    }
`;

module.exports = typeDefs;