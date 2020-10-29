import b from 'benny'

import * as hasura from './hasura'
import * as relay from './hasura-relay'
import createRubyTest from './ruby'

const main = async () => {
  const ruby = await createRubyTest()

  b.suite(
    'GraphQL Server',

    b.add('Hasura (Large Query)', hasura.createLargeQueryTest),
    b.add('Hasura (Small Query)', hasura.createSmallQueryTest),
    b.add('Hasura w/ Relay (Large Query)', relay.createLargeQueryTest),
    b.add('Hasura w/ Relay (Small Query)', relay.createSmallQueryTest),
    b.add('Ruby (Large Query)', ruby.largeQueryTest),
    b.add('Ruby (Small Query)', ruby.smallQueryTest),

    b.cycle(),
    b.complete(),
    b.save({ file: 'reduce', version: '1.0.0' }),
    b.save({ file: 'reduce', format: 'chart.html' }),
  )
}

main()
