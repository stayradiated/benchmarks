import React from 'react'

interface Props {
  onSubmit: (name: string, email: string) => void,
}

const Form: React.FC<Props> = (props) => {
  const { onSubmit } = props

  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    onSubmit(name, email)
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>Add Contact</p>
      <label>Name</label>
      <input type="text" value={name} onChange={handleNameChange} />
      <label>Email</label>
      <input type="text" value={email} onChange={handleEmailChange} />
      <button type="submit">Add Contact</button>
    </form>
  )
}

export default Form
