const sinon = require('sinon')
const test  = require('ava')

const on = require('../../src/events/on')

test('should call `obj.on()` with arguments', t => {
  const obj = {
    on: sinon.stub().returnsThis()
  }
  
  const fn = () => {}
  
  on(obj, 'event', fn)

  t.true(obj.on.calledOnceWithExactly('event', fn))
})

test('should return `obj`', t => {
  const obj = {
    on: sinon.stub().returnsThis()
  }

  t.true(on(obj, 'event', () => {}) === obj)
})
