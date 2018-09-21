const test = require('ava')

const dict = require('../../src/object/dict')

test('should return Object with null prototype', t => {
  t.true(Object.getPrototypeOf(dict()) === null)
})
