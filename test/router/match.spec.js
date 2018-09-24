const test = require('ava')

const match = require('../../src/router/match')

test('should return an Object', t => {
  t.true(typeof match('/', {}) === 'object')
})

test('should follow a path down an Object tree', t => {
  const path = '/one/two/three'

  const tree = {
    one: {
      two: {
        three: {
          key: 'value'
        }
      }
    }
  }
  
  t.true(match(path, tree).hasOwnProperty('key'))
  t.true(match(path, tree)['key'] === 'value')
})

test('should return null if cannot follow path', t => {
  const path = '/one/two/broken'

  const tree = {
    one: {
      two: {
        three: {
          key: 'value'
        }
      }
    }
  }
  
  t.true(match(path, tree) === null)
})
