const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    username: String!
    email: String!
    password: String!
    savedBooks: [Book]
}

type Auth {
    token: ID!
    user: User
}

type Book {
    authors: [String],
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
}
type Query{
    getSingleUser(username: String!): User
}
type Mutation{
    createUser(
        username: String!
        email: String!
        password: String!
        ): Auth
    saveBook(
        bookId: String!
        _id: String!
    ): User
    deleteBook(
        bookId: String!
        _id: String!
    ): User
    login(
        username: String!,
        password: String!
        ): Auth
}
`

module.exports = typeDefs