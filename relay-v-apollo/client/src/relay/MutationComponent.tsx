import React from 'react'
import graphql from 'babel-plugin-relay/macro'
import { commitMutation } from 'react-relay'

import environment from './environment'
import updateLocalStore from './updateLocalStore'
import Form from '../components/Form'

import { queryContactsQueryResponse } from './__generated__/queryContactsQuery.graphql'

type Viewer = queryContactsQueryResponse['viewer']

const mutation = graphql`
  mutation MutationComponentMutation($input: ContactInput!) {
    createContact(input: $input) {
      id
      email
      name
    }
  }
`

function commit (name: string, email: string, viewer: Viewer) {
  return commitMutation(environment, {
    mutation,
    variables: {
      input: {
        name,
        email,
      },
    },
    updater: (store, data) => updateLocalStore(store, data, viewer),
  })
}

const MutationComponent = (options: { viewer: Viewer }) => {
  const { viewer } = options

  const handleSubmit = (name: string, email: string) => {
    commit(name, email, viewer)
  }

  return (
    <Form onSubmit={handleSubmit} />
  )
}

export default MutationComponent
