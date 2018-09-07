// lib/test.js
const {builtTestDir} = require('./build.js');
const {run} = require('./npmbin.js');

// runTest()
function runTest() {
  return run('mocha', [builtTestDir]);
}

// clean()
function clean() {
}

module.exports = { runTest, clean };
