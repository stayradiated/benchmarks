import React from 'react'
import { Link } from 'react-router-dom'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

import ContactList from '../components/ContactList'

import MutationComponent from './MutationComponent'
import QueryComponent from './QueryComponent'

export const client = new ApolloClient({
  uri: 'http://localhost:9999/graphql',
  cache: new InMemoryCache(),
})

const Main = () => {
  return (
    <ApolloProvider client={client}>
      <div className="Main">
        <Link to="/relay" className="switch">
          Switch to Relay
        </Link>
        <div className="container">
          <QueryComponent>
            {(data) => (
              <>
                <ContactList edges={data.viewer.allContacts.edges} />
                <MutationComponent />
              </>
            )}
          </QueryComponent>
        </div>
      </div>
    </ApolloProvider>
  )
}

export default Main
