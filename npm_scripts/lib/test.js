// lib/test.js
const path = require('path');
const { run } = require('./npmbin.js');

// test()
function test() {
  return run('mocha', [path.join('build', 'test')]);
}

// clean()
function clean() {
}

module.exports = { test, clean };
