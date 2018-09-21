const sinon      = require('sinon')
const proxyquire = require('proxyquire')
const test       = require('ava')

const stub = sinon.stub()

const server = proxyquire('../../src/core/server', {
  'http': {
    createServer: stub
  }
})

test('should call `http#createServer()`', t => {
  server()
  t.true(stub.callCount === 1)
})
