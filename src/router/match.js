/**
 * @file src/router/match.js
 */
'use strict'

const has    = require('../object/has')
const reduce = require('../array/reduce')
const split  = require('../url/split')

module.exports = (p, t) => reduce(split(p), (r, c) => r && has(r, c) ? r[c] : null, t)
