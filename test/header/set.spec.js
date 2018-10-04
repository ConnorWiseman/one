const sinon = require('sinon')
const test  = require('ava')

const set = require('../../src/header/set')

test('should return the ServerResponse object', t => {
  const res = {
    setHeader: sinon.stub()
  }
  
  t.true(set(res) === res)
})

test('should cal `res#setHeader` to set a header', t => {
  const res = {
    setHeader: sinon.stub()
  }
  
  set(res, 'header', 'value')
  
  t.true(res.setHeader.calledOnceWithExactly('header', 'value'))
})
