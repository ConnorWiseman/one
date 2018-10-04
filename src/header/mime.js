/**
 * @file src/header/mime.js
 */
'use strict'

const mime = require('mime/lite')

const set = require('./set')

/**
 * Sets the Content-Type header for a given file path, {p}. Not a pure function.
 * @param  {ServerResponse} res
 * @param  {String}         p
 * @return {ServerResponse}
 */
module.exports = (res, p) => set(res, 'Content-Type', mime.getType(p))
