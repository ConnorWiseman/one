/**
 * @file src/object/has.js
 */
'use strict'


/**
 * Returns true if an Object {o} has {k} as one of its own properties.
 * @param  {Object} o
 * @param  {String} k
 * @return {Boolean}
 */
module.exports = (o, k) => Object.prototype.hasOwnProperty.call(o, k)
