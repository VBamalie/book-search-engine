import { gql } from '@apollo/client';

export const  GET_SINGLE_USER = gql`
    query getSingleUser{
        getSingleUser{
            username
            savedBooks
        }
    }
`
// export const searchGoogleBooks = (query) => {
//     return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
//   };