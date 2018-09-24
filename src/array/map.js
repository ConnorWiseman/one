/**
 * @file src/url/map.js
 */
'use strict'

const reduce = require('./reduce')

/**
 * Applies a given Function {fn} to every element in an Array {arr} to map one
 * Array to another. Analogous to Array.prototype.map.
 * @param  {Array}    arr
 * @param  {Function} fn
 * @return {Array}
 */
module.exports = (arr, fn) => reduce(arr, (r, c) => [...r, fn(c)], [])
