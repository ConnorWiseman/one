const test = require('ava')

const push = require('../../src/array/push')

test('should increase length of resulting Array', t => {
  const arr = [ 1, 2, 3, 4 ]
  t.true(push(arr, 5).length === 5)
})

test('should append element at end of Array', t => {
  const arr = [ 1, 2, 3, 4 ]
  t.true(push(arr, 5)[4] === 5)
})

test('should not increase length of original Array', t => {
  const arr = [ 1, 2, 3, 4 ]
  push(arr, 5)
  t.true(arr.length === 4)
})
