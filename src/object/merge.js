/**
 * @file src/object/merge.js
 */
'use strict'

const keys   = require('./keys')
const merger = require('./merger')
const reduce = require('./reduce')


module.exports = reduce(keys(s), merger(merge, t, s), { ...t })
