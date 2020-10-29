import Fastify from 'fastify'
import CORS from 'fastify-cors'
import mercurius from 'mercurius'
import * as fs from 'fs'
import { join } from 'path'

const app = Fastify()

const schema = fs.readFileSync(join(__dirname, '../schema.graphql'), 'utf8')

const resolvers = {
  Query: {
    viewer: async () => {
      return {
        id: 'VIEWER_ID',
      }
    },
  },
  Viewer: {
    allContacts: async () => {
      return {
        edges: [
          {
            node: {
              id: 1,
              name: 'Anne',
              email: 'anne@example.com',
            },
          },
          {
            node: {
              id: 2,
              name: 'Barry',
              email: 'barry@example.com',
            },
          },
        ],
      }
    },
  },
}

app.register(CORS, {
  origin: true,
})

app.register(mercurius, {
  routes: true,
  graphiql: 'playground',
  jit: 1,
  schema,
  resolvers,
})

app.listen(9999)
