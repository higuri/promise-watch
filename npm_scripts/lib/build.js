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
const builtTestDir = path.join('build', 'src');

// createBuildProc
function createBuildProc(target, watch) {
  const cmd = binpath('tsc');
  let args = ['--project', target];
  if (watch) {
    args.push('--watch');
  }
  console.log(['tsc'].concat(args).join(' ') + ' ...');
  const proc = spawn(cmd, args, { stdio: 'pipe' });
  proc.stdout.pipe(process.stdout);
  proc.stderr.pipe(process.stderr);
  return proc;
}

// doBuild
function doBuild(target) {
  return new Promise((resolve, reject) => {
    const proc = createBuildProc(target);
    proc.on('exit', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(code);
      }
    });
  });
}

// BuildWatch
// TODO: cleanup
// TODO: buildTest: test/**/*.* not watched ?
class BuildWatch extends EventEmitter {

  build(target) {
    const proc = createBuildProc(target, true);
    proc.stdout.on('data', (buffer) => {
      const line = buffer.toString('utf8');
      if (line.includes('Found 0 errors.')) {
        this.emit('compiled');
      }
    });
    proc.on('exit', (code) => {
      this.emit('exit', code);
    });
  }
}

// doBuildWatch()
function doBuildWatch(target) {
  const watch = new BuildWatch();
  watch.build(target);
  return watch;
}


// async buildSrc()
function buildSrc(watch = false) {
  if (watch) {
    return doBuildWatch('src', watch);
  } else {
    return doBuild('src');
  }
}

// buildTest()
function buildTest(watch = false) {
  if (watch) {
    return doBuildWatch('src', watch);
  } else {
    return doBuild('test');
  }
}

// clean
function clean() {
  fs.removeSync('build');
}

module.exports = {
  builtSrcDir, builtTestDir,
  buildSrc, buildTest, clean
};
