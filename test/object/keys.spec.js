const test = require('ava')

const keys = require('../../src/object/keys')

test('should return an Array', t => {
  t.true(Array.isArray(keys({})))
})

test('should return an Array of Object keys', t => {
  const obj = {
    first:  1,
    second: 2,
    third:  3
  }
  
  t.true(keys(obj)[0] === 'first')
  t.true(keys(obj)[1] === 'second')
  t.true(keys(obj)[2] === 'third')
})
