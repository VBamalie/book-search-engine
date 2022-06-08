const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    username: String!
    email: String!
    password: String!
    savedBooks: [Book]
}

type Book {
    
}
`

module.exports = typeDefs