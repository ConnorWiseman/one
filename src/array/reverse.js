/**
 * @file src/array/reverse.js
 */
'use strict'

const reduce = require('./reduce')

/**
 * Reverses a given Array {arr}.
 * @param  {Array} arr
 * @return {Array}
 */
module.exports = (arr) => reduce(arr, (r, c) => [ c, ...r ], [])
