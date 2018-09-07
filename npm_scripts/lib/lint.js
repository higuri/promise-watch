// lib/lint.js
const path = require('path');
const { run } = require('./npmbin.js');

// lint()
function lint(target) {
  return run('tslint', [
    '--config', path.join('config', 'tslint.json'),
    '--project', path.join(target, 'tsconfig.json')
  ]);
}

// lintSrc()
function lintSrc() {
  return lint('src');
}

// lintTest()
function lintTest() {
  return lint('test');
}

// clean()
function clean() {
}

module.exports = { lintSrc, lintTest, clean };
