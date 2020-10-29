import got from 'got'

const execGraphQLQuery = async (query: string) => {
  const result = await got('http://localhost:8080/v1beta1/relay', {
    method: 'POST',
    json: {
      query,
    },
  }).json()

  return result
}

const LARGE_QUERY = `
{
  users_connection(where: {id: {_eq: 8}}) { edges { node {
    account {
      id
      name
      projects_connection { edges { node {
        name
        assignments_connection { edges { node {
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
        } } }
      } } }
      people_connection { edges { node {
        id
        first_name
        last_name
        assignments_connection { edges { node {
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
        } } }
      } } }
    }
  } } }
}
`

const SMALL_QUERY = `
{
  users_connection(where: {id: {_eq: 8}}) { edges { node {
    account {
      name
      projects_connection { edges { node {
        name
      } } }
      people_connection { edges { node {
        name
      } } }
    }
  } } }
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
