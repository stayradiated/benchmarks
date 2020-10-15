import b from 'benny'
import classNames from 'classnames'

const styles = {
  a: 'classname-a',
  b: 'classname-b',
  c: 'classname-c',
}

const isWarning = true

b.suite(
  'Classnames',

  b.add('classNames(args)', () => {
    return classNames(styles.a, isWarning && styles.b)
  }),

  b.add('classNames(object)', () => {
    return classNames({ [styles.a]: true, [styles.b]: isWarning })
  }),

  b.add('String Literal', () => {
    return `${styles.a} ${isWarning ? styles.b : ''}`
  }),

  b.cycle(),
  b.complete(),
  b.save({ file: 'reduce', version: '1.0.0' }),
  b.save({ file: 'reduce', format: 'chart.html' }),
)
