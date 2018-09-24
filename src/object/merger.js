/**
 * @file src/object/merger.js
 */
'use strict'

const give = require('./give')
const is   = require('./is')

/**
 * Returns a reducer Function used in the reduce operation that powers `merge()`
 * in src/object/merge.js. Recursively calls a given merge Function {m} with the
 * current property values from the source Object {s} to merge them onto the
 * target Object {t}.
 * @param  {Function} m
 * @param  {Object}   t
 * @param  {Object}   s
 * @return {Function}
 */
module.exports = (m, t, s) => (r, k) => { if (is(s[k])) { m(give(t, k), s[k]) } return { ...r, [k]: s[k] } }
