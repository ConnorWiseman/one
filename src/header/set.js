/**
 * @file src/header/set.js
 */
'use strict'

/**
 * Sets a header on an outgoing ServerResponse, {res}. Not a pure function.
 * @param  {ServerResponse} res
 * @param  {String}         h
 * @param  {string}         v
 * @return {ServerResponse}
 */
module.exports = (res, h, v) => !res.setHeader(h, v) && res
