/**
 * @file src/events/off.js
 */
'use strict'

/**
 * Removes an event handler {cb} for a given event name {e} to a specified
 * EventEmitter Object {o}. Returns the EventEmitter. Not a pure function.
 * @param  {EventEmitter} o
 * @param  {String}       e
 * @param  {Function}     cb
 * @return {EventEmitter}
 */
module.exports = (o, e, cb) => o.off(e, cb)
