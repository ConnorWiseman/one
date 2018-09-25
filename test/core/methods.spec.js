const test = require('ava')

const methods = require('../../src/core/methods')

test('should return an Array', t => {
  t.true(Array.isArray(methods()))
})

test('returned Array should include GET, DELETE, HEAD, OPTIONS, POST, & PUT', t => {
  t.true(methods().includes('get'))
  t.true(methods().includes('delete'))
  t.true(methods().includes('head'))
  t.true(methods().includes('options'))
  t.true(methods().includes('post'))
  t.true(methods().includes('put'))
})

test('returned Array should not include CONNECT or TRACE', t => {
  t.true(!methods().includes('connect'))
  t.true(!methods().includes('trace'))
})
