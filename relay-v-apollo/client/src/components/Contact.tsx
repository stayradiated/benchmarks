import React from 'react'

interface Props {
  contact: {
    name: string,
    email: string,
  },
}

const Contact: React.FC<Props> = (props) => {
  const { contact } = props

  return (
    <div>
      <p>Name: {contact.name}</p>
      <p>Email: {contact.email}</p>
    </div>
  )
}

export default Contact
