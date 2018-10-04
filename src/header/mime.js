/**
 * @file src/header/mime.js
 */
'use strict'

const mime = require('mime/lite')

const set = require('./set')

module.exports = (res, p) => set(res, 'Content-Type', mime.getType(p))
