/**
 * @file src/static/send.js
 */
'use strict'

const fstream   = require('./fstream')
const mime      = require('../header/mime')
const normalize = require('./normalize')

/**
 * Pipes a ReadStream for the resource at the union of a given directory {d} and
 * a subpath {p} to the specified ServerResponse {res}. Not a pure Function
 * because it touches the file system.
 * @param  {ServerResponse} res
 * @param  {String}         d
 * @param  {String}         p
 * @return {WriteStream}
 */
module.exports = (res, d, p) => fstream(normalize(d, p)).pipe(mime(res, p))
