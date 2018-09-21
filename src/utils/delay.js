/**
 * @file src/utils/delay.js
 */
'use strict'

const promise = require('../object/promise')

/**
 * Returns a Promise that resolves after {t} milliseconds.
 * @param  {Number} t
 * @return {Promise}
 */
module.exports = (t) => promise((r) => setTimeout(r, t))
