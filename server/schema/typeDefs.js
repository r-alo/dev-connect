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
        _id: ID!
        firstName: String!
        lastName: String!
        email: String!
        phone: String!
        github: String!
        email:String!
        languages: [Language]
        password: String
    }
    type Auth {
        token: ID!
        freelancer: Freelancer
      }

    type Query {
        language: [Language]
        framework: [Framework]
        platform: [Platform]
        freelancers: [Freelancer]
        freelancer(profileId: ID!): Freelancer

    }

    type Mutation {
        addLanguageTypeScript: Language
        addProfile(firstName: String!, lastName: String!, phone: String!, github: String!, company: String!, email: String!, password: String!, language: String!, framework: String!, platform: String!): Freelancer
        login(email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;

