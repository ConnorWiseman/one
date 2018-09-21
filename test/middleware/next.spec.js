const sinon = require('sinon')
const test  = require('ava')

const next = require('../../src/middleware/next')

test('should execute a function to invoke the next middleware', t => {
  const each   = sinon.stub().resolves(true)
  const state  = {}
  const fn     = sinon.stub()
  const done   = sinon.stub()
  const length = 1
  
  next(each, state, [ fn ], done, length)
  t.true(each.callCount === 1)
})

test('should execute a function to complete middleware stack', t => {
  const each   = sinon.stub().resolves(true)
  const state  = {}
  const fn     = sinon.stub()
  const done   = sinon.stub()
  const length = 1
  const index  = 1
  
  next(each, state, [ fn ], done, length, index)
  t.true(done.callCount === 1)
})
