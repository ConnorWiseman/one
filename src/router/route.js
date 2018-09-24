/**
 * @file src/router/route.js
 */
'use strict'

const rreduce = require('../array/rreduce')
const split   = require('../url/split')

/**
 * Returns a route object for a given path {p} with a given Array of Functions
 * {stack} as its middleware stack.
 * @param  {String}           p
 * @param  {Array.<Function>} stack
 * @return {Object}
 */
module.exports = (p, stack) => rreduce(split(p), (r, k) => ({ [k]: {...r }}), { stack })
