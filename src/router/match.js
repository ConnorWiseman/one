/**
 * @file src/router/match.js
 */
'use strict'

const has    = require('../object/has')
const reduce = require('../array/reduce')
const split  = require('../url/split')

/**
 * Given a URL request path {p} and a tree Object {t}, uses the slash-separated
 * pieces of the path to walk down the tree, returning the Object at the end of
 * the path or null if not found.
 * @param  {String} p
 * @param  {Object} t
 * @return {Object|null}
 */
module.exports = (p, t) => reduce(split(p), (r, c) => r && has(r, c) ? r[c] : null, t)
