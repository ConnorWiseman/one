/**
 * @file src/static/exists.js
 */
'use strict'

const { access, constants } = require('fs')
const { F_OK }              = constants

const normalize = require('./normalize')
// const promise   = require('../object/promise')

/**
 * Returns a Promise that resolves to true if the normalized union of a given
 * directory {d} and a subpath {p} exists on the file system. Not a pure
 * Function because it touches the file system.
 * @param  {String} d
 * @param  {String} p
 * @return {Promise.<Boolean>}
 */
module.exports = (d, p) => new Promise((s) => access(normalize(d, p), F_OK, (e) => e ? s(false) : s(true)))
