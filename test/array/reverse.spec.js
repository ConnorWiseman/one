const test = require('ava')

const reverse = require('../../src/array/reverse')

test('should return an Array', t => {
  t.true(Array.isArray(reverse([])))
})

test('should return a reversed copy of an Array', t => {
  const arr = [ 1, 2, 3 ]
  t.true(reverse(arr)[0] === 3)
  t.true(reverse(arr)[1] === 2)
  t.true(reverse(arr)[2] === 1)
})
