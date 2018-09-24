const test = require('ava')

const give = require('../../src/object/give')

test('should assign value to target property', t => {
  t.true(give({}, 'key').hasOwnProperty('key'))
})

test('should do nothing if Object already has target property', t => {
  t.true(give({ key: 'exists' }, 'key').hasOwnProperty('key'))
})
