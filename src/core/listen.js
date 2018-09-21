/**
 * @file src/core/listen.js
 */
'use strict'

/**
 * Makes a given Server {sv} listen for connections.
 * @param  {Server} sv
 * @param  {Object} [opts={}]
 * @return {Server}
 */
module.exports = (sv, opts = { port: 3000 }) => sv.listen(opts)
