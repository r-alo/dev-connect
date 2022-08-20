const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Nickname {
        _id:ID!
        nickname: String!
    }

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
        languages: [Language]
        frameworks: [Framework]
        platforms: [Platform]
        knowledge: [Knowledge]
        password: String!
        type: String!
    }

    type Recruiter {
        _id: ID!
        firstName: String!
        lastName: String!
        email: String!
        phone: String!
        password: String!
        type: String
    }

    type Auth {
        token: ID!
        recruiter: Recruiter
        freelancer: Freelancer
      }


    type Query {
        me: Freelancer
        nickname: [Nickname]
        language: [Language]
        framework: [Framework]
        platform: [Platform]
        knowledge: [Knowledge]
        freelancers: [Freelancer]
        # freelancer(profileId: ID!): Freelancer

    }

    input LanguageInput {
        language: String
    }
    input FrameworkInput {
        framework: String
    }
    input PlatformInput {
        platform: String
    }
    input KnowledgeInput {
        knowledge: String
    }

    type Mutation {
        addLanguageTypeScript: Language

        addFreelancer( firstName: String!, lastName: String!, phone: String!, github: String!, company: String!, email: String!, password: String!, languages: [LanguageInput], frameworks: [FrameworkInput], platforms: [PlatformInput], knowledge: [KnowledgeInput]): Auth

        addRecruiter(firstName: String!, lastName: String!, phone: String!, company: String!, email: String!, password: String!): Auth

        loginFreelancer(email: String!, password: String!): Auth

        loginRecruiter(email: String!, password: String!): Auth

        addLanguage(_id: ID!, language: String!): Freelancer
    }
`;

module.exports = typeDefs;

