// lib/build.js
const path = require('path');
const fs = require('fs-extra');
const {run} = require('./npmbin.js');
const {lintSrc, lintTest} = require('./lint.js');

// build
function build(target, watch) {
  let args = ['--project', target];
  if (watch) {
    args.push('--watch');
  }
  return run('tsc', args);
}

// TODO: watch + lint

// async buildSrc()
async function buildSrc(watch = false, lint = false) {
  await build('src', watch, lint);
  if (lint) {
    await lintSrc();
  }
}

// buildTest()
async function buildTest(watch = false, lint = false) {
  await build('test', watch, lint);
  if (lint) {
    await lintTest();
  }
}

// cf. config/tsconfig-base.json#outDir
// builtSrcDir
const builtSrcDir = path.join('build', 'src');
// buildTestDir
const builtTestDir = path.join('build', 'src');

// clean
function clean() {
  fs.removeSync('build');
}

module.exports = {
  builtSrcDir, builtTestDir,
  buildSrc, buildTest, clean
};
