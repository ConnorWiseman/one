const test = require('ava')

const reduce = require('../../src/array/reduce')

test('should reduce an Array', t => {
  const arr = [ 1, 1, 1, 1, 1 ]
  t.true(reduce(arr, (r, c) => r + c, 0) === arr.length)
})

test('should reduce an Array from left to right', t => {
  const arr = [ 'w', 'o', 'r', 'l', 'd' ]
  t.true(reduce(arr, (r, c) => r + c, 'Hello, ') === 'Hello, world')
})
