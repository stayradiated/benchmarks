import React from 'react'

import Contact from './Contact'

interface Props {
  edges: Readonly<{
    readonly node: {
      readonly name: string,
      readonly email: string,
      readonly id: string,
    },
  | null}[]>,
}

const ContactList: React.FC<Props> = (props) => {
  const { edges } = props

  return (
    <div className="ContactList">
      {edges.map((edge) => {
        const contact = edge.node
        if (contact == null) {
          return null
        }
        return <Contact key={contact.id} contact={contact} />
      })}
    </div>
  )
}

export default ContactList
