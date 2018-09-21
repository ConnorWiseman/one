const sinon = require('sinon')
const test  = require('ava')

const off = require('../../src/events/off')

test('should call `obj.off()` with arguments', t => {
  const obj = {
    off: sinon.stub().returnsThis()
  }
  
  const fn = () => {}
  
  off(obj, 'event', fn)

  t.true(obj.off.calledOnceWithExactly('event', fn))
})

test('should return `obj`', t => {
  const obj = {
    off: sinon.stub().returnsThis()
  }

  t.true(off(obj, 'event', () => {}) === obj)
})
