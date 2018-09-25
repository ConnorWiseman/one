/**
 * @file src/router/tree.js
 */
'use strict'

const dict    = require('../object/dict')
const methods = require('../core/methods')
const reduce  = require('../array/reduce')

/**
 * Exports the base tree Object used internally by the built-in router to map
 * URL request paths to HTTP methods.
 * @param  {Array.<String>} [m=methods()]
 * @param  {Object}         [o=dict()]
 * @return {Object}
 */
module.exports = (m = methods(), o = dict()) => reduce(m, (r, c) => ({ ...r, [c]: dict() }), o)
