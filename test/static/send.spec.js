const proxyquire = require('proxyquire')
const sinon      = require('sinon')
const test       = require('ava')

const stub = sinon.stub()

const send = proxyquire('../../src/static/send', {
  '../header/mime': (res) => res,
  './fstream': () => ({
    pipe: stub
  })
})

test('should pipe a ReadStream', t => {
  const res = {}
  send(res, '', '')

  t.true(stub.callCount === 1)
})
