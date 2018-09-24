const test = require('ava')

const is = require('../../src/object/is')

test('should return `false` if Object is undefined', t => {
  t.false(is(undefined))
  t.false(is(void 0))
  t.false(is())
})

test('should return `false` if typeof Object not `object`', t => {
  t.false(is('string'))
  t.false(is(Number(1)))
})

test('should return `false` if Object is an Array', t => {
  t.false(is([1, 2, 3]))
})

test('should return `false` if Object is null', t => {
  t.false(is(null))
})

test('should return `true` if Object is an Object', t => {
  t.true(is({}))
  t.true(is(Object.create(null)))
})
