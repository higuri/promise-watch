// lib/build.js
const fs = require('fs-extra');
const {EventEmitter} = require('events');
const path = require('path');
const {spawn} = require('child_process');
const {binpath} = require('./npmbin.js');

// cf. config/tsconfig-base.json#outDir
// builtSrcDir
const builtSrcDir = path.join('build', 'src');
// buildTestDir
const builtTestDir = path.join('build', 'test');

// doBuild()
function doBuild(target, watch) {
  const cmd = binpath('tsc');
  let args = ['--project', target];
  if (watch) {
    args.push('--watch');
  }
  console.log(['tsc'].concat(args).join(' ') + '...');
  const proc = spawn(cmd, args, { stdio: 'pipe' });
  proc.stdout.pipe(process.stdout);
  proc.stderr.pipe(process.stderr);
  const promise = new Promise((resolve, reject) => {
    proc.on('exit', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject();
      }
    });
  });
  if (watch) {
    // TODO: cleanup: Promise + EventEmitter
    const emitter = new EventEmitter();
    promise.on = emitter.on
    promise.emit = emitter.emit
    proc.stdout.on('data', (buffer) => {
      const line = buffer.toString('utf8');
      if (line.includes('Found 0 errors.')) {
        promise.emit('compiled');
      }
    });
  }
  return promise;
}

// async buildSrc()
function buildSrc(watch = false) {
  return doBuild('src', watch);
}

// buildTest()
function buildTest(watch = false) {
  return doBuild('test', watch);
}

// clean
function clean() {
  fs.removeSync('build');
}

module.exports = {
  builtSrcDir, builtTestDir,
  buildSrc, buildTest, clean
};
