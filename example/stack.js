/**
 * A sample middleware Function stack.
 * @file example/stack.js
 */
'use strict'

const path = require('path')

const fns = require('../')

const { gather }     = fns.array
const { delay, log } = fns.utils
const { serve }      = fns.static

// A middleware stack is simply an Array of middleware Functions.

// Middleware Functions accept two parameters: a state Object and a `next`
// Function. The state Object may be destructured into `req`, `res`, `ctx`, and
// `server` Object references. `next` must be explicitly called with the current
// `ctx` object to maintain context between differing middleware Functions.

// Consider the examples below:
/*
    function first(state, next) {
      state.ctx.key = 'value';
      return next(state.ctx);
    }

    const second = ({ctx}, next) => next({...ctx, key: 'value'})
 */
// Both `first()` and `second()` above perform the same task: they set a key on
// the current middleware context object to a certain value, then flow into the
// next middleware Function in the stack.

// This project is all about pointless brevity, so the second form is preferred.

// Below is the middleware stack that powers the demonstration. It sets a number
// of properties on the middleware context, then begins logging messages to the
// console to demonstrate KoaJS-like asynchronous middleware flow.

module.exports = gather(
  ({req, ctx}, next) => {
    console.log(`2) Requesting ${req.url}\n`)
    next(ctx)
  },
  serve(path.join(__dirname, 'static')),
  ({ctx}, next) => {
    log('3) Setting a bunch of properties on the `ctx` object\n')
    return next(ctx)
  },
  ({ctx}, next) => next({ ...ctx, test:  true }),
  ({ctx}, next) => next({ ...ctx, extra: 'more' }),
  ({ctx}, next) => next({ ...ctx, hello: { target: 'world' } }),
  ({ctx}, next) => next({ ...ctx, pet:   { target: 'cat'   } }),
  ({ctx}, next) => next({ ...ctx, feed:  { target: 'dog'   } }),
  ({ctx}, next) => next(ctx), // not passing ctx resets it- try empty parentheses
  async ({ctx, req, res}, next) => {
    log('4) Skipping ahead in the middleware stack just a bit with async/await\n')
    await next(ctx)
    log('11) Finally getting around to ending response. Check your browser!')
    res.end('Delayed hello, world!')
  },
  async({ctx}, next) => {
    log('\t5) Waiting an arbitrary 1 second before ending the response')
    log('\t   (Pretend it\'s an awful internet connection or something)\n')
    await delay(1000)
    log('6) Oh, good, finally connected\n')
    await next(ctx)
    log('10) One more step backward to go...')
  },
  async ({ctx, req, res}, next) => {
    log('\t7) Waiting an arbitrary 3 seconds before ending the response')
    log('\t   (Pretend it\'s an intense database operation or something)\n')
    await delay(3000)
    await next(ctx)
    log('\n9) Okay, stepping back to where we skipped ahead...')
  }
)
