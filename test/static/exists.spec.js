const proxyquire = require('proxyquire')
const sinon      = require('sinon')
const test       = require('ava')

const stub = sinon.stub()

const exists = proxyquire('../../src/static/exists', {
  'fs': {
    access: stub
  }
})

test('should return a Promise', t => {
  t.true(exists('', '') instanceof Promise)
})

test.serial('should resolve to `true` if resource is accessible', async t => {
  stub.callsArgWith(2, null)
  const r = await exists('', '');
  t.true(stub.callCount === 1)
  t.true(r)
  stub.reset()
})

test.serial('should resolve to `false` if resource is inaccessible', async t => {
  stub.callsArgWith(2, new Error('error'))
  const r = await exists('', '');
  t.true(stub.callCount === 1)
  t.false(r)
  stub.reset()
})
