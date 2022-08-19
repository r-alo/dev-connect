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
        password: String!
    }

    type Recruiter {
        _id: ID!
        firstName: String!
        lastName: String!
        email: String!
        phone: String!
        password: String!
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
        freelancers: [Freelancer]
        # freelancer(profileId: ID!): Freelancer

    }

    type Mutation {
        addLanguageTypeScript: Language
        addProfile( firstName: String!, lastName: String!, phone: String!, github: String!, company: String!, email: String!, password: String!, language: [String!], framework: [String!], platform: [String!]): Freelancer
        addRecruiter(firstName: String!, lastName: String!, phone: String!, company: String!, email: String!, password: String!): Recruiter
        loginFreelancer(email: String!, password: String!): Auth
        loginRecruiter(email: String!, password: String!): Auth
        addLanguage(_id: ID!, language: String!): Freelancer
    }
`;

module.exports = typeDefs;

