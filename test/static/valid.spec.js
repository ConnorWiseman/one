const proxyquire = require('proxyquire')
const sinon      = require('sinon')
const test       = require('ava')

const existsStub = sinon.stub()
const isdirStub  = sinon.stub()

const valid = proxyquire('../../src/static/valid', {
  './exists': existsStub,
  './isdir':  isdirStub
})

test('should return a Promise', t => {
  t.true(valid() instanceof Promise)
})

test.serial('Promise should resolve to false if `!exists()`', async t => {
  existsStub.resolves(false)
  t.false(await valid())
  existsStub.reset()
})

test.serial('Promise should resolve to false if `exists()` but `isdir()`', async t => {
  existsStub.resolves(true)
  isdirStub.resolves(true)
  t.false(await valid())
  existsStub.reset()
  isdirStub.reset()
})

test.serial('Promise should resolve to true if `exists()` and `!isdir()`', async t => {
  existsStub.resolves(true)
  isdirStub.resolves(false)
  t.true(await valid())
  existsStub.reset()
  isdirStub.reset()
})
