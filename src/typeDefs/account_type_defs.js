const { gql } = require('apollo-server');

const accountTypeDefs = gql `

    type Account {
        username: String!
        balance: Int!
        lastChange: String!
    }

    extend type Query { #Preguntar por este extend
        accountByUsername(username: String!): Account
    }
`;

module.exports = accountTypeDefs