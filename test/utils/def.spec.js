const test = require('ava')

const def = require('../../src/utils/def')

test('should return true if {x} is defined', t => {
  t.true(def(1))
  t.true(def(true))
  t.true(def('defined'))
  t.true(def(null))
})

test('should rturn false if {x} is undefined', t => {
  t.false(def(undefined))
  t.false(def(void 0))
})
