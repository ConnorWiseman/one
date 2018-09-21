const test = require('ava')

const len = require('../../src/array/len')

test('should return length of Array', t => {
  const arr = [ 1, 2, 3, 4, 5 ]
  
  t.true(len(arr) === 5)
})
