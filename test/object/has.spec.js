const test = require('ava')

const has = require('../../src/object/has')

test('should return `true` if Object has own property', t => {
  t.true(has({ key: 'value '}, 'key'))
})
