const sinon = require('sinon')
const test  = require('ava')

const merger = require('../../src/object/merger')

test('should return a Function', t => {
  t.true(typeof merger() === 'function')
})

test('returned Function should merge properties onto target', t => {
  const m = sinon.stub().returnsArg(0)
  const o = {}
  const s = {
    'key': true
  }
  
  const r = merger(m, o, s)(t, 'key')
  t.true(m.callCount === 0)
  t.true(r.hasOwnProperty('key'))
  t.true(r['key'] === s['key'])
})

test('returned Function should merge Object properties onto target', t => {
  const m = sinon.stub().returnsArg(0)
  const o = {}
  const s = {
    'objkey': {
      'deep': true
    }
  }
  
  const r = merger(m, o, s)(t, 'objkey')
  t.true(m.callCount === 1)
  t.true(r.hasOwnProperty('objkey'))
  t.true(r['objkey'] === s['objkey'])
  t.true(r['objkey'].hasOwnProperty('deep'))
  t.true(r['objkey']['deep'] === s['objkey']['deep'])
})
