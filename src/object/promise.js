/**
 * @file src/object/promise.js
 */
'use strict'

/**
 * Returns a Promise wrapper around a given Function {fn}.
 * @param  {Function} fn
 * @return {Promise}
 */
module.exports = (fn) => new Promise(fn)
