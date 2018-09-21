/**
 * @file src/object/dict.js
 */
'use strict'

const create = require('./create')

/**
 * Returns an Object with a null prototype, suitable for creating dictionaries
 * with.
 * @return {Object}
 */
module.exports = () => create(null)
