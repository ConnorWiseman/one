const sinon = require('sinon')
const test  = require('ava')

const delay = require('../../src/utils/delay')

test('should use `setTimeout()` to delay Promise resolution', async t => {
  const clock = sinon.useFakeTimers({
    toFake: [ 'setTimeout' ]
  })
  
  sinon.spy(global, 'setTimeout')
  
  delay(0)
  
  await clock.runAll()
  
  t.true(setTimeout.callCount === 1)
  
  await setTimeout.restore()
  await clock.restore()
})
