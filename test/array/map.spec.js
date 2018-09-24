const test = require('ava')

const map = require('../../src/array/map')

test('should map an Array', t => {
  const arr = [ 1, 2, 3 ]
  
  t.true(map(arr, n => 2 * n)[0] === 2)
  t.true(map(arr, n => 2 * n)[1] === 4)
  t.true(map(arr, n => 2 * n)[2] === 6)
})
