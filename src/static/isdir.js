/**
 * @file src/static/isdir.js
 */
'use strict'

const stat      = require('./stat')
const normalize = require('./normalize')

/**
 * Returns a Promise that resolves to `true` if the union of a given directory
 * {d} and a subpath {p} is a directory and `false` if not. Not a pure Function
 * because it touches the file system.
 * @param  {String} d
 * @param  {String} p
 * @return {Promise.<Boolean>}
 */
module.exports = async (d, p) => (await stat(normalize(d, p))).isDirectory()
