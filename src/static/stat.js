/**
 * @file src/static/stat.js
 */
'use strict'

const { stat } = require('fs')

const promise = require('../object/promise')

/**
 * Returns a Promise wrapper around `fs.stat()` that resolves to the Stats
 * Object for a given path {p}. Not safe to use in isolation without first
 * ensuring that the resource at {p} exists first. Not a pure Function because
 * it touches the file system.
 * @param  {String} p
 * @return {Promise.<Stats>}
 */
module.exports = (p) => promise((s, f) => stat(p, (e, r) => e ? f(e) : s(r)))
