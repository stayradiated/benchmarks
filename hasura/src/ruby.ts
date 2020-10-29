import got from 'got'

import { signIn } from './ruby-auth'

const LARGE_QUERY = `
{
  viewer {
    account {
      id
      name
      projects {
        name
        assignments {
          id
          minutes_per_day
          is_billable
          role_id
          start_date
          total_minutes
          person_id
          project_id
          note
          end_date
          active
        }
      }
      people {
        id
        first_name
        last_name
        assignments {
          id
          minutes_per_day
          is_billable
          role_id
          start_date
          total_minutes
          person_id
          project_id
          note
          end_date
          active
        }
      }
    }
  }
}
`

const SMALL_QUERY = `
{
  viewer {
    account {
      name
      projects {
        name
      }
      people {
        name
      }
    }
  }
}
`

const createRubyTest = async () => {
  const { cookieJar } = await signIn({
    host: 'http://localhost:5000',
    email: 'user@example.com',
    password: 'password',
  })

  const execGraphQLQuery = (query: string) => {
    return got('http://localhost:5000/graphql', {
      method: 'POST',
      json: {
        query,
      },
      headers: {
        accept: '*/*',
      },
      cookieJar,
    }).json()
  }

  return {
    largeQueryTest: () => execGraphQLQuery(LARGE_QUERY),
    smallQueryTest: () => execGraphQLQuery(SMALL_QUERY),
  }
}

export default createRubyTest
