const proxyquire = require('proxyquire')
const sinon      = require('sinon')
const test       = require('ava')

const stub = sinon.stub()

const stat = proxyquire('../../src/static/stat', {
  fs: {
    stat: stub
  }
})

test('should return a Promise', t => {
  t.true(stat() instanceof Promise)
})

test('should resolve to Stats Object if no error occurs', async t => {
  stub.callsArgWith(1, null, true)
  await t.notThrowsAsync(async () => {
    t.true(await stat())
  })
  stub.reset()
})

test('should throw if no error occurs', async t => {
  stub.callsArgWith(1, new Error('error'))
  await t.throwsAsync(async () => {
    await stat()
  })
  stub.reset()
})
