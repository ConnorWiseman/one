const test = require('ava')

const tree = require('../../src/router/tree')

test('should return an Object', t => {
  t.true(typeof tree() === 'object')
})

test('should flatten an Array of Strings into sibling Object properties', t => {
  const r = tree([ 'one', 'two', 'three' ])

  t.true(r.hasOwnProperty('one'))
  t.true(r.hasOwnProperty('two'))
  t.true(r.hasOwnProperty('three'))
})
