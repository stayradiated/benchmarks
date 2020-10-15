import gql from 'graphql-tag'

export interface GetContactsResponse {
  viewer: {
    allContacts: {
      edges: {
        node: {
          name: string,
          email: string,
          id: string,
        },
      }[],
    },
  },
}

export const GET_CONTACTS = gql`
  query getContacts {
    viewer {
      allContacts {
        edges {
          node {
            name
            email
            id
          }
        }
      }
    }
  }
`
