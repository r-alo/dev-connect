const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Language {
        _id: ID!,
        language: String!
    }
    type Framework {
        _id: ID!,
        framework: String!
    }
    type Platform {
        _id: ID!,
        platform: String!
    }
    type Knowledge {
        _id: ID!,
        knowledge: String!
    }
    # type Freelancer {
    #     _id: ID!,
    #     language: String!
    # }
    type Query {
        language: [Language],
    }
`;

module.exports = typeDefs;