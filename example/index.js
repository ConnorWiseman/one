/**
 * @file example/index.js
 */
'use strict'

const fns = require('../')

const { close, listen, server } = fns.core
const { on }                    = fns.events
const { handler }               = fns.middleware
const { dir, log }              = fns.utils

// For brevity's sake, middleware Functions are stored elsewhere:
const stack = require('./stack')

// The callback to be executed at the end of the middleware Stack:
const done = ({server, ctx}) => {
  log('8) All done! Here\'s the context modified through each middleware:')
  dir(ctx, { depth: null, colors: true })
  close(server)
}

// Nested Function calls that create a middleware handler, server instance,
// event listeners, and finally that start the server instance.
listen(
  on(
    on(
      server(
        handler(stack, done)
      ), 'close', () => log('\n11) Server has closed!')
    ), 'listening', () => log('1) Server is now listening on localhost:3000\n')
  )
)

// The above is roughly analogous to the below:
/*
    const middleware = handler(stack, done)

    let instance = server(handler)

    instance = on(instance, 'close', () => log('\n11) Server has closed!'))
    instance = on(instance, 'listening', () => log('1) Server is now listening on localhost:3000\n'))
    instance = listen(instance)
 */
