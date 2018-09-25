const proxyquire = require('proxyquire')
const sinon      = require('sinon')
const test       = require('ava')

const stub = sinon.stub()

const fstream = proxyquire('../../src/static/fstream', {
  fs: {
    createReadStream: stub
  }
})

test('should call `fs#createReadStream()`', t => {
  fstream()
  t.true(stub.callCount === 1)
})
