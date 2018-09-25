/**
 * @file src/static/valid.js
 */
'use strict'

const exists = require('./exists')
const isdir  = require('./isdir')

/**
 * Returns a Promise that resolves to `true` if the union of a given directory
 * {d} and a subpath {p} exists and is not a directory. Used to determine if
 * a static file is suitable to serve as a response to an incoming request. Not
 * a pure Function because it touches the file system.
 * @param  {String} d
 * @param  {String} p
 * @return {Promise.<Boolean>}
 */
module.exports = async (d, p) => await exists(d, p) && !(await isdir(d, p))
