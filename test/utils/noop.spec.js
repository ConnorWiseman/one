const test = require('ava')

const noop = require('../../src/utils/noop')

test('should do nothing', t => {
  noop()
  t.pass()
})

test('should not throw', t => {
  t.notThrows(() => {
    noop()
  })
})
