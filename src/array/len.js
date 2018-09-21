/**
 * @file src/array/len.js
 */
'use strict'

const reduce = require('./reduce')

/**
 * Uses `reduce()` to count the number of elements in a given Array {arr}.
 * @param  {Array} xs
 * @return {Number}
 */
module.exports = (arr) => reduce(arr, (r, x) => r + 1, 0)
