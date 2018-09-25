/**
 * @file src/array/rreduce.js
 */
'use strict'

const reduce  = require('./reduce')
const reverse = require('./reverse')

/**
 * Analogous to Array.prototype.reduceRight.
 * @param  {Array}    arr
 * @param  {Function} fn
 * @param  {*}        r
 * @return {*}
 */
module.exports = (arr, fn, r, i = 0) => reduce(reverse(arr), fn, r, i)
