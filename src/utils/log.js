/**
 * @file src/utils/log.js
 */
'use strict'

/**
 * An alias for `console.log()`. Not a pure function.
 * @param {...*} args
 */
module.exports = (...args) => console.log.apply(null, args)
