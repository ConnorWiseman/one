const test = require('ava')

const normalize = require('../../src/static/normalize')

test('should return a String', t => {
  t.true(typeof normalize('', '') === 'string')
})

test('should not join paths outside of first directory', t => {
  t.true(normalize('C:/parent/dir', '../siblingdir') === 'C:/parent/dir/siblingdir')
  t.true(normalize('C:/parent/dir', '../../siblingdir') === 'C:/parent/dir/siblingdir')
  t.true(normalize('C:/parent/dir', '../../../siblingdir') === 'C:/parent/dir/siblingdir')
  t.true(normalize('C:/parent/dir', '../../../../siblingdir') === 'C:/parent/dir/siblingdir')
})

test('should resolve to first directory if path is ``', t => {
  t.true(normalize('C:/parent/dir', '') === 'C:/parent/dir/')
})

test('should resolve to first directory if path is `/`', t => {
  t.true(normalize('C:/parent/dir', '/') === 'C:/parent/dir/')
})
