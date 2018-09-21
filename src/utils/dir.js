/**
 * @file src/utils/dir.js
 */
'use strict'

/**
 * An alias for `console.dir()`. Not a pure function.
 * @param {Object} o
 * @param {Object} [opts={}]
 */
module.exports = (o, opts = { depth: null, colors: true }) => console.dir(o, opts)
