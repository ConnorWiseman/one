const sinon = require('sinon')
const test  = require('ava')

const listen = require('../../src/core/listen')

test('should call `sv#listen()`', t => {
  const sv = {
    listen: sinon.stub()
  }
  
  listen(sv)
  t.true(sv.listen.callCount === 1)
})

test('should throw if no `listen()` method available', t => {
  const sv = {}
  
  t.throws(() => {
    listen(sv)
  })
})
