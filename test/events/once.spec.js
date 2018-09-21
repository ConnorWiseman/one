const sinon = require('sinon')
const test  = require('ava')

const once = require('../../src/events/once')

test('should call `obj.once()` with arguments', t => {
  const obj = {
    once: sinon.stub().returnsThis()
  }
  
  const fn = () => {}
  
  once(obj, 'event', fn)

  t.true(obj.once.calledOnceWithExactly('event', fn))
})

test('should return `obj`', t => {
  const obj = {
    once: sinon.stub().returnsThis()
  }

  t.true(once(obj, 'event', () => {}) === obj)
})
