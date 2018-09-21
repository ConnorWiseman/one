const sinon = require('sinon')
const test  = require('ava')

const log = require('../../src/utils/log')

test('should call `console.log`', async t => {
  await sinon.stub(console, 'log')
  
  log('test')
  t.true(console.log.callCount === 1)
  
  await console.log.restore()
})
