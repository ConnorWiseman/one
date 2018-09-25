/**
 * @file src/static/fstream.js
 */
'use strict'

const { createReadStream } = require('fs')

/**
 * Returns a ReadStream for a given file {f} using the options {o}. Not a pure
 * function because it touches the file system.
 * @param  {String} f
 * @param  {Object} [o={}]
 * @return {ReadStream}
 */
module.exports = (f, o = { encoding: 'utf-8' }) => createReadStream(f, o)
