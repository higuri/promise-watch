// lib/lint.js
const path = require('path');
const { run } = require('./npmbin.js');

// lint()
function lint() {
  return run('tslint', [
    '--config', path.join('config', 'tslint.json'),
    '--project', path.join('config', 'tsconfig.json')
  ]);
}

// clean()
function clean() {
}

module.exports = { lint, clean };
