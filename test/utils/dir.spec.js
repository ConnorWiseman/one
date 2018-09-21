const sinon = require('sinon')
const test  = require('ava')

const dir = require('../../src/utils/dir')

test('should call `console.dir`', async t => {
  await sinon.stub(console, 'dir')
  
  dir({})
  t.true(console.dir.callCount === 1)
  
  await console.dir.restore()
})
