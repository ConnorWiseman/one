const test = require('ava')

const rreduce = require('../../src/array/rreduce')

test('should reduce an Array', t => {
  const arr = [ 1, 1, 1, 1, 1 ]
  t.true(rreduce(arr, (r, c) => r + c, 0) === arr.length)
})

test('should reduce an Array from right to left', t => {
  const arr = [ 'w', 'o', 'r', 'l', 'd' ]
  t.true(rreduce(arr, (r, c) => r + c, 'Hello, ') === 'Hello, dlrow')
})
