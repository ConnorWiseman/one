/**
 * @file src/middleware/handler.js
 */
'use strict'

const dict = require('../object/dict')
const each = require('./each')
const len  = require('../array/len')
const next = require('./next')

/**
 * Maps a given ClientRequest Object {r} to its underlying Server instance.
 * Used to make `handler()` fit into the 100-character challenge limit.
 * @param  {ClientRequest} r
 * @return {Server}
 * @private
 */
const s = (r) => r.socket.server

/**
 * [exports description]
 * @param  {Array.<Function>} m
 * @param  {Function}         d
 * @param  {Object}           [ctx=dict()]
 * @return {Function}
 */
module.exports = (m, d, ctx = dict()) => (req, res) => next(each, { ctx, req, res, server: s(req) }, m, d, len(m))
