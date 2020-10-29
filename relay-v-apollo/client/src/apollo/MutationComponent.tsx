import React from 'react'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/client'

import Form from '../components/Form'

const CREATE_CONTACT = gql`
  mutation createContact($input: ContactInput!) {
    createContact(input: $input) {
      contactEdge {
        __typename
        node {
          id
          email
          name
        }
      }
    }
  }
`

const MutationComponent = () => {
  const [createContact] = useMutation(CREATE_CONTACT)

  const handleSubmit = (name: string, email: string) => {
    createContact({ variables: { input: { name, email } } })
  }

  return <Form onSubmit={handleSubmit} />
}

export default MutationComponent
