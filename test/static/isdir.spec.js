const proxyquire = require('proxyquire')
const sinon      = require('sinon')
const test       = require('ava')

const stubFn = sinon.stub()

const stub = sinon.stub().returns({
  isDirectory: stubFn
})

const isdir = proxyquire('../../src/static/isdir', {
  './stat': stub
})

test('should return a Promise', t => {
  t.true(isdir('', '') instanceof Promise)
})

test('Promise should eventually resolve to Boolean', async t => {
  stubFn.returns(true)
  t.true(await isdir('', ''))
  stubFn.reset()
})
