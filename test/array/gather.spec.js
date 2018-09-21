const test = require('ava')

const gather = require('../../src/array/gather')

test('should return an Array', t => {
  t.true(Array.isArray(gather(1, 2, 3)))
})

test('should return an Array with arguments in same order', t => {
  const arr = gather(1, 2, 3)
  
  t.true(arr[0] === 1)
  t.true(arr[1] === 2)
  t.true(arr[2] === 3)
})
