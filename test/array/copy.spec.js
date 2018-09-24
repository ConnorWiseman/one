const test = require('ava')

const copy = require('../../src/array/copy')

test('should return an Array', t => {
  t.true(Array.isArray(copy([])))
})

test('should return a copy of an Array', t => {
  const arr = [ 1, 2, 3 ]
  t.true(copy(arr)[0] === 1)
  t.true(copy(arr)[1] === 2)
  t.true(copy(arr)[2] === 3)
  t.false(arr === copy(arr))
})
