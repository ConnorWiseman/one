/**
 * @file src/array/reduce.js
 */
'use strict'

const def = require('../utils/def')

/**
 * For a given Array {xs} and beginning at index position {i}, recursively
 * performs Function {fn} on each element in the Array, reducing the results
 * onto the specified result parameter {r}. Analogous to Array.prototype.reduce.
 * @param  {Array}    xs
 * @param  {Function} fn
 * @param  {*}        r
 * @param  {Number}   [i=0]
 * @return {*}
 */
const reduce = ([x, ...xs], fn, r, i = 0) => def(x) ? reduce(xs, fn, fn(r, x, i), i + 1) : r

module.exports = reduce
