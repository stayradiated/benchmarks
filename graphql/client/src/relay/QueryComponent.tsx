import React from 'react'
import { QueryRenderer } from 'react-relay'

import environment from './environment'
import { GET_CONTACTS } from './query'
import { queryContactsQueryResponse } from './__generated__/queryContactsQuery.graphql'

type Props = {
  children: (data: queryContactsQueryResponse) => React.ReactNode
}

const QueryComponent: React.FC<Props> = (props) => {
  const { children } = props

  return (
    <QueryRenderer
      environment={environment}
      query={GET_CONTACTS}
      render={({ error, props }) => {
        if (error) {
          return <div>Error!</div>
        }
        if (props == null) {
          return <div>Loading...</div>
        }
        return children(props)
      }}
    />
  )
}

export default QueryComponent
