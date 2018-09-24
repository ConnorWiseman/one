/**
 * @file src/object/is.js
 */
'use strict'

const def = require('../utils/def')

/**
 * Returns true if a given argument {o} is an Object, false if not.
 * @param  {*} o
 * @return {Boolean}
 */
module.exports = (o) => def(o) && typeof o === 'object' && !Array.isArray(o) && o !== null
