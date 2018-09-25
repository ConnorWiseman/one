/**
 * @file src/static/normalize.js
 */
'use strict'

const { join } = require('path')

/**
 * Returns the normalized union of a given directory {d} and a subpath {p},
 * stripping out any relative paths to confine the subpath within the target
 * directory.
 * @param  {String} d
 * @param  {String} p
 * @return {String}
 */
module.exports = (d, p) => join(d, `./${p.replace(/^(\.\.(?:\/))*/, '')}`)
