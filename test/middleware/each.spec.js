const sinon = require('sinon')
const test  = require('ava')

const each = require('../../src/middleware/each')

test('should return a Promise', t => {
  const state  = {}
  const fn     = sinon.stub()
  const done   = sinon.stub()
  const length = 1
  const index  = 0
  
  t.true(each(state, [ fn ], done, length, index) instanceof Promise)
})

test('should await current middleware Function', t => {
  const state  = {}
  const fn     = sinon.stub().callsArg(1)
  const done   = sinon.stub()
  const length = 1
  const index  = 0

  t.notThrows(() => {
    each(state, [ fn ], done, length, index)
  })
})
