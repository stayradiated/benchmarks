module.exports = {
  src: './src',
  schema: '../server/schema.graphql',
  language: 'typescript',
  exclude: [
    '**/node_modules/**',
    '**/__mocks__/**',
    '**/__generated__/**'
  ],
}
