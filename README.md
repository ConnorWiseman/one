# one
> A JavaScript functional programming challenge featuring too much pointless brevity.

![Node.js](https://img.shields.io/badge/node.js-%3E=_8.2.1-blue.svg?style=flat-square)
[![Build Status](https://img.shields.io/travis/com/ConnorWiseman/one/master.svg?style=flat-square)](https://travis-ci.com/ConnorWiseman/one)
[![Code Coverage](https://img.shields.io/codeclimate/coverage/ConnorWiseman/one.svg?style=flat-square)](https://codeclimate.com/github/ConnorWiseman/one)
[![Maintainability](https://img.shields.io/codeclimate/maintainability/ConnorWiseman/one.svg?style=flat-square)](https://codeclimate.com/github/ConnorWiseman/one)
[![Dependencies Status](https://david-dm.org/ConnorWiseman/one/status.svg?style=flat-square)](https://david-dm.org/ConnorWiseman/one)
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/ConnorWiseman/one/blob/master/LICENSE)

__Q:__ Can a basic Node.js web application framework be composed from multiple single-line functions, each with a length of 100 characters or fewer?

__A:__ Yeah, more-or-less.


## Challenge Rules
* Each function may only be a single line long
* Each function definition must not exceed 100 characters in length
    * Length limit does not include assignment (`module.exports = `, etc.)
    * Length limit does include formal parameters (`(x, y, z) => {}`)
* Functions must be short, but readable: include spaces
* Prefer pure functions where possible
* Semicolons are prohibited
* Comments are required to help understand what each function does
* Unit tests and 100% code coverage are required
* All code must run in strict mode


## Demonstration
```shell
git clone https://github.com/ConnorWiseman/one.git
cd one
npm i
npm start
```

Pop open a browser and hit `http://localhost:3000`, then watch your console.


## To-do List
* Implement some form of URL request routing
* Add MIME types to static file responses
