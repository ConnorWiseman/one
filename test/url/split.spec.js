const test = require('ava')

const split = require('../../src/url/split')

test('should return an Array', t => {
  t.true(Array.isArray(split('/')))
})

test('should split String apart at forward slashes', t => {
  const r = split('/one/two/three/')
 
  t.true(r[0] === 'one')
  t.true(r[1] === 'two')
  t.true(r[2] === 'three')
})

test('should return `/` when splitting single forward slash', t => {
  t.true(split('/')[0] === '/')
})
