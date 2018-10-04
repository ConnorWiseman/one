const proxyquire = require('proxyquire')
const sinon      = require('sinon')
const test       = require('ava')

const stub = sinon.stub().returns('')

const mime = proxyquire('../../src/header/mime', {
  'mime/lite': {
    getType: stub
  }
})

test.serial('should return the ServerResponse object', t => {
  const res = {
    setHeader: sinon.stub()
  }
  
  t.true(mime(res) === res)
  stub.resetHistory()
})

test.serial('should cal `res#setHeader` to set a header', t => {
  const res = {
    setHeader: sinon.stub()
  }
  
  mime(res, 'txt')
  t.true(res.setHeader.callCount === 1)
  t.true(res.setHeader.calledOnceWithExactly('Content-Type', ''))
  stub.resetHistory()
})

test.serial('should call `mime#getType`', t => {
  const res = {
    setHeader: sinon.stub()
  }
  
  mime(res, 'txt')
  
  t.true(stub.calledOnceWithExactly('txt'))
  stub.resetHistory()
})
