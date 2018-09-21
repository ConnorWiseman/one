/**
 * Exports all the functions used in this package as one giant Object blob.
 * Only delves one directory deep and only pulls in files that end in `.js`.
 * A catch-all until I figure out which parts of this project truly need to be
 * exposed publicly.
 * @file index.js
 */
'use strict'

const fs   = require('fs')
const path = require('path')

module.exports = fs.readdirSync(path.resolve(__dirname, 'src'))
  .map((each) => path.resolve(__dirname, 'src', each))
  .filter((each) => fs.existsSync(each) && fs.lstatSync(each).isDirectory())
  .reduce((results, dir) => ({
    ...results,
    [  path.basename(dir) ]: fs.readdirSync(path.resolve(__dirname, 'src', dir))
      .filter((each) => path.extname(each) === '.js')
      .reduce((results, each) => ({
        ...results,
        [ path.basename(each, '.js') ]: require(path.resolve(__dirname, 'src', dir, each))
      }), Object.create(null))
  }), Object.create(null))
