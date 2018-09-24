/**
 * @file src/url/split.js
 */
'use strict'

const map  = require('../array/map')
const trim = require('./trim')

/**
 * Splits a URL request path (like `/foo/:var/bar/`) into An Array of its
 * component parts ([`foo`, `:var`, `bar`], in this case).
 * @param  {String} s
 * @return {Array.<String>}
 */
module.exports = (s) => map(trim(s).match(/(?<=\/)[\w:]*(?=\/*?)/g), (s) => s === '' ? '/' : s)
