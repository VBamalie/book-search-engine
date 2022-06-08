import { gql } from '@apollo/client';

export const CREATE_USER = gql`
    mutation createUser($username: String!, $email: String!, $password: String!){
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
      }
    }
`;

export const SAVE_BOOK = gql`
    mutation saveBook($bookId: String!, $_id: String!){
        saveBook(bookId: $String, _id: $String){
            username
            savedBooks{
                authors
                description
                image
                link
                title
            }
        }
    }
`;

export const DELET_BOOK = gql`
    mutation deleteBook($bookId: String!, $_id: String!){
        deleteBook(bookId: $String, _id: $String){
            username
            savedBooks{
                authors
                description
                image
                link
                title
            }
        }
    }
`;

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;