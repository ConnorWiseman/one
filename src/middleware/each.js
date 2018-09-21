/**
 * @file src/middleware/each.js
 */
'use strict'

const dict = require('../object/dict')
const next = require('./next')

/**
 * Executes each middleware Function in a given stack {m}.
 * @param  {Object}           s - The current state Object.
 * @param  {Array.<Function>} m - The middleware Function stack.
 * @param  {Function}         d - The Function to call when the stack is done.
 * @param  {Number}           l - The length of the middleware Function stack.
 * @param  {Number}           i - The current middleware Function being executed.
 * @return {Promise}
 */
const each = async (s, m, d, l, i) => await m[i](s, (ctx = dict()) => next(each, {...s, ctx}, m, d, l, i + 1))

module.exports = each
