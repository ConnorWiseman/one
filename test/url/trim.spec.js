const test = require('ava')

const trim = require('../../src/url/trim')

test('should return a String', t => {
  t.true(typeof trim('/') === 'string')
})

test('should trim trailing slash if length >= 2', t => {
  t.true(trim('/str/') === '/str')
})

test('should leave trailing slash if length < 2', t => {
  t.true(trim('/') === '/')
})
