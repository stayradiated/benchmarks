import React from 'react'
import { useQuery } from '@apollo/client'

import { GET_CONTACTS, GetContactsResponse } from './query'

interface Props {
  children: (data: GetContactsResponse) => React.ReactElement,
}

const QueryComponent: React.FC<Props> = (props) => {
  const { children } = props

  const { loading, data, error } = useQuery<GetContactsResponse>(GET_CONTACTS)

  if (error) {
    return <div>Error!</div>
  }

  if (loading) {
    return <div>Loading...</div>
  }

  if (children != null && data != null) {
    return children(data)
  }

  return null
}

export default QueryComponent
