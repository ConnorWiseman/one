/**
 * @file src/middleware/next.js
 */
'use strict'

/**
 * Executes the next middleware Function in a given middleware stack, {m}.
 * Fairly complex-- see parameter descriptions below.
 * @param  {Function}         e     - The Function to run for each middleware
 * @param  {Object}           s     - State shared across every middleware
 * @param  {Array.<Function>} m     - An Array of middleware Functions
 * @param  {Function}         d     - A Function to execute when done
 * @param  {Number}           l     - The length of the middleware Array
 * @param  {Number}           [i=0] - The index of the middleware to begin executing
 * @return {Promise}
 */
module.exports = async (e, s, m, d, l, i = 0) => (i < l) ? await e(s, m, d, l, i) : d(s)
