/**
 * @file src/core/server.js
 */
'use strict'

const http = require('http')

/**
 * Returns an instance of `http.Server` wrapped around a callback Function {cb}.
 * Not a pure function.
 * @param  {Function} cb
 * @return {Server}
 */
module.exports = (cb) => http.createServer(cb)
