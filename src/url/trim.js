/**
 * @file src/url/trim.js
 */
'use strict'

/**
 * Trims the trailing slash off the end of strings longer than two characters.
 * @param  {String} s
 * @return {String}
 */
module.exports = (s) => s.length >= 2 ? s.replace(/\/$/, '') : s
