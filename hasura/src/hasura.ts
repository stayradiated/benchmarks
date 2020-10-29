import got from 'got'

const execGraphQLQuery = async (query: string) => {
  const result = await got('http://localhost:8080/v1/graphql', {
    method: 'POST',
    json: {
      query,
    },
  }).json()

  return result
}

const LARGE_QUERY = `
{
  users(where: {id: {_eq: 8}}) {
    account {
      id
      name
      projects {
        name
        assignments {
          active
          end_date
          id
          is_billable
          minutes_per_day
          note
          person_id
          project_id
          role_id
          start_date
          total_minutes
        }
      }
      people {
        id
        first_name
        last_name
        assignments {
          active
          end_date
          id
          is_billable
          minutes_per_day
          note
          person_id
          project_id
          role_id
          start_date
          total_minutes
        }
      }
    }
  }
}
`

const SMALL_QUERY = `
{
  users(where: {id: {_eq: 8}}) {
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

const createLargeQueryTest = () => {
  return () => execGraphQLQuery(LARGE_QUERY)
}

const createSmallQueryTest = () => {
  return () => execGraphQLQuery(LARGE_QUERY)
}

export {
  createLargeQueryTest,
  createSmallQueryTest,
}
