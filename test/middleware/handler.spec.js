const proxyquire = require('proxyquire')
const sinon      = require('sinon')
const test       = require('ava')

const stub = sinon.stub()

const handler = proxyquire('../../src/middleware/handler', {
  './next': stub
})

test('should return a Function', t => {
  t.true(typeof handler() === 'function')
})

test('returned Function should call `next()` to start the middleware stack', t => {
  const m = []
  const d = null
  
  const req = {
    socket: {
      server: null
    }
  }
  const res = null
  
  handler(m, d)(req, res)
  t.true(stub.callCount === 1)
})
