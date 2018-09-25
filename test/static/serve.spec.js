const proxyquire = require('proxyquire')
const sinon      = require('sinon')
const test       = require('ava')

const sendStub  = sinon.stub()
const validStub = sinon.stub()

const serve = proxyquire('../../src/static/serve', {
  './send':  sendStub,
  './valid': validStub
})

test('should return an AsyncFunction', t => {
  t.true(typeof serve('') === 'function')
  t.true(serve('').constructor.name === 'AsyncFunction')
})

test.serial('if path is valid, should send file', async t => {
  validStub.resolves(true)
  await serve('')({ req: { url: '' } })
  t.true(sendStub.callCount === 1)

  sendStub.reset()
  validStub.reset()
})

test.serial('if path is invalid, should call `next()`', async t => {
  validStub.resolves(false)

  const next = sinon.stub()

  await serve('')({ req: { url: '' } }, next)
  t.true(sendStub.callCount === 0)
  t.true(next.callCount === 1)

  sendStub.reset()
  validStub.reset()
})
