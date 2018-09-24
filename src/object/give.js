/**
 * @file src/object/give.js
 */
'use strict'

const def  = require('../utils/def')
const dict = require('./dict')

/**
 * Ensures an Object {o} has the given property {k} with the value {v}.
 * @param  {Object} o
 * @param  {String} k
 * @param  {*}      [v]
 * @return {Object}
 */
module.exports = (o, k, v = dict()) => def(o[k]) ? {...o} : {...o, [k]: v}
