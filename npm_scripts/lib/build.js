// lib/build.js
const fs = require('fs-extra');
const { run } = require('./npmbin.js');

// build
function build(watch) {
  let args = ['--project', 'config'];
  if (watch) {
    args.push('--watch');
  }
  return run('tsc', args);
}

// clean
function clean() {
  fs.removeSync('build');
}

module.exports = { build, clean };
