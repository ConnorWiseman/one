const test = require('ava')

const promise = require('../../src/object/promise')

test('should return a Promise', t => {
  t.true(promise((r) => r()) instanceof Promise)
})
