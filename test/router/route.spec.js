const test = require('ava')

const route = require('../../src/router/route')

test('should return an Object', t => {
  t.true(typeof route('/', []) === 'object')
})

test('should return an Object with nested keys corresponding to the path', t => {
  const fns = []
  const r   = route('/one/two/three', fns)
  
  t.true(typeof r === 'object')
  t.true(r.hasOwnProperty('one'))
  t.true(r['one'].hasOwnProperty('two'))
  t.true(r['one']['two'].hasOwnProperty('three'))
  t.true(r['one']['two']['three'].hasOwnProperty('stack'))
  t.true(r['one']['two']['three'].stack === fns)
})

test('should return an Object with middleware stack nested inside', t => {
  const fns = []
  const r   = route('/one/two/three', fns)
  
  t.true(typeof r === 'object')
  t.true(r['one']['two']['three'].stack === fns)
})
