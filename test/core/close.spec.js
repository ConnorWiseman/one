const sinon = require('sinon')
const test  = require('ava')

const close = require('../../src/core/close')

test('should call `sv#close()`', t => {
  const sv = {
    close: sinon.stub()
  }
  
  close(sv)
  t.true(sv.close.callCount === 1)
})

test('should throw if no `close()` method available', t => {
  const sv = {}
  
  t.throws(() => {
    close(sv)
  })
})
