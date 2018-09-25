/**
 * @file src/static/serve.js
 */
'use strict'

const send  = require('./send')
const valid = require('./valid')

/**
 * Returns a middleware Function for serving static files from within a given
 * directory {d}.
 * @param  {String} d
 * @return {AsyncFunction}
 */
module.exports = (d) => async ({req, res, ctx}, n) => (await valid(d, req.url)) ? send(res, d, req.url) : n(ctx)
