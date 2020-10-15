import * as React from 'react'
import { Link } from 'react-router-dom'

interface Props {}

const Home: React.FC<Props> = (props) => {
  return (
    <>
      <h1>GraphQL Client Comparision</h1>
      <ul>
        <li>
          <Link to="/apollo">Apollo</Link>
        </li>
        <li>
          <Link to="/relay">Relay</Link>
        </li>
      </ul>
    </>
  )
}

export default Home
