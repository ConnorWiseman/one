const test = require('ava')

const create = require('../../src/object/create')

test('should return an Object', t => {
  t.true(typeof create(null) === 'object')
})

test('should return instanceof prototye', t => {
  function Test() {}

  t.true(create(Test.prototype) instanceof Test)
})
